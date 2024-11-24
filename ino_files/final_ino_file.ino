#define TRIGPIN D5
#define ECHOPIN D6
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Arduino.h>
#include "ESP8266WiFi.h"
#include <ESP8266HTTPClient.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

float duration;
int feet, cm, inches, in, ft, centi;

const char* server = "109.106.254.194";
const char* ssid = "Nicakes"; 
const char* password = "walangpassword";

IPAddress server_addr(109, 106, 254, 194);
char user[] = "bsit3567_aquapath";
char password_db[] = "Aquapath2024";

WiFiClient client;
MySQL_Connection conn((Client *)&client);
MySQL_Cursor cursor = MySQL_Cursor(&conn);

void setup(void) {
  pinMode(ECHOPIN, INPUT);
  pinMode(TRIGPIN, OUTPUT);

  Serial.begin(9600);
  lcd.init();
  lcd.backlight();

  lcd.setCursor(4, 0);
  lcd.print("Kagayaku");
  lcd.setCursor(5, 1);
  lcd.print("Soup!");
  delay(3000);
  lcd.clear();

  lcd.setCursor(3,0);
  lcd.print("Loading...");
  lcd.setCursor(4,1);
  lcd.print("AquaPath");
  delay(4000);
  lcd.clear();

  lcd.setCursor(0, 0);
  lcd.print("Connecting WiFi...");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("WiFi Connected");

  delay(2000);
  lcd.clear();

  lcd.setCursor(0, 0);
  lcd.print("Connecting DB...");
  if (!conn.connect(server_addr, 3306, user, password_db)) {
    Serial.println("MySQL connection failed.");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("DB Conn Failed");
    delay(2000);
  } else {
    Serial.println("MySQL connected");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("DB Connected");
    delay(2000);
  }

  lcd.clear();
}

void loop() {
  digitalWrite(TRIGPIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGPIN, HIGH);
  delayMicroseconds(20);
  digitalWrite(TRIGPIN, LOW);
  duration = pulseIn(ECHOPIN, HIGH);

  cm = (duration * 0.034) / 2;
  inches = (duration * 0.01339) / 2;
  feet = inches / 12;
  in = (int)inches % 12;
  ft = (4 - feet);
  
  centi = (31 - cm);  // Calculate centi as 31 - cm

  char status[10];
  if (centi < 0 || centi == -99) {
    strcpy(status, "Invalid");
  } else if (centi >= 1 && centi <= 10) {
    strcpy(status, "Passable");
  } else if (centi >= 11 && centi <= 20) {
    strcpy(status, "Risky");
  } else if (centi >= 21) {
    strcpy(status, "Impassable");
  }

  lcd.setCursor(0, 0);
  lcd.print("AquaPath");
  lcd.setCursor(0, 1);
  lcd.print("Lvl: " + String(centi) + " cm   ");  // Display centi value on LCD
  Serial.println(String(centi) + " cm");

  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi not connected.");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("WiFi not connected");
    delay(2000);
    return;
  }

  if (WiFi.status() == WL_CONNECTED && !conn.connected()) {
    Serial.println("WiFi connected, connecting to MySQL...");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("DB Connecting...");
    if (!conn.connect(server_addr, 3306, user, password_db)) {
      Serial.println("MySQL connection failed.");
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("DB Conn Failed");
      delay(2000);
      return;
    }
    Serial.println("Connected to MySQL!");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("DB Connected");
    delay(2000);
  }

  int water_lvl = centi;
  char location[] = "Carmen V. de Luna Street";
  char created_at[] = "CURRENT_TIMESTAMP";

  char query[512];
  sprintf(query, "INSERT INTO bsit3567_aquapath.tbl_water_lvls (water_lvl, location, status, created_at) VALUES (%d, '%s', '%s', %s)", water_lvl, location, status, created_at);

  if (cursor.execute(query)) {
    Serial.println("Data sent to MySQL.");
  } else {
    Serial.println("Error executing query: " + String(query));
  }

  delay(2000);
}
