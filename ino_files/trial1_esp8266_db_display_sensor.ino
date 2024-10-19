#include <Arduino.h>
#include "ESP8266WiFi.h"
#include <ESP8266HTTPClient.h>
#include <MySQL_Connection.h>
#include <MySQL_Cursor.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Define connections to sensor
#define TRIGPIN D6 // GPIO 12
#define ECHOPIN D5 // GPIO 14

LiquidCrystal_I2C lcd(0x27, 16, 2);

float duration;
int feet, cm, inches, ft, centi, in;

// WiFi parameters to be configured
const char* ssid = "Pegasus Hunter"; // Your Wi-Fi SSID
const char* password = "AT8H029JJB7";    // Your Wi-Fi password

// MySQL server credentials
IPAddress server_addr(192, 168, 254, 114); // IP of the MySQL server (your PC)
char user[] = "mingae";                    // MySQL username
char password_db[] = "12345";              // MySQL password

WiFiClient client;
MySQL_Connection conn((Client *)&client);
MySQL_Cursor cursor = MySQL_Cursor(&conn); // Declare cursor globally

void setup(void) {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println(WiFi.localIP());

  // Connect to MySQL
  Serial.println("Connecting to MySQL...");
  if (!conn.connect(server_addr, 3306, user, password_db)) {
    Serial.println("Connection failed. Check your credentials or server IP.");
    while (1);
  }
  Serial.println("Connected to MySQL!");

  pinMode(ECHOPIN, INPUT);
  pinMode(TRIGPIN, OUTPUT);
  
  // Initialize LCD
  lcd.begin(16, 2);
  lcd.backlight();
  
  // Display "Kagayaku Soup" for the first 20 seconds
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Kagayaku Soup");

  unsigned long startTime = millis();
  while (millis() - startTime < 20000) {
    // Hold the display for 20 seconds
    delay(100);
  }

  // After 20 seconds, clear the LCD and continue with the distance measurement
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Distance:");
}

void loop() {
  if (!conn.connected()) {
    Serial.println("Reconnecting to MySQL...");
    if (!conn.connect(server_addr, 3306, user, password_db)) {
      Serial.println("Reconnection failed. Check your credentials or server IP.");
      return;
    }
  }

  // Read sensor data
  digitalWrite(TRIGPIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIGPIN, HIGH);
  delayMicroseconds(20);
  digitalWrite(TRIGPIN, LOW);
  duration = pulseIn(ECHOPIN, HIGH);
  feet = (duration * 0.0343 / 2) / 30.48;
  cm = (duration * 0.0343) / 2;
  inches = (duration * 0.01339) / 2;
  ft = (4-feet);
  centi = (122 - cm);

  while (inches>=12){
    inches -= 12;
  }
  in = inches;
  

  // Display on LCD
  lcd.setCursor(0, 1);
  lcd.print(String(feet) + " ft, " + String(cm) + " cm");

  // Print result to serial monitor
  Serial.print(ft +" Feet " + in + "In");
  Serial.print(centi + " Centimeters");

  // Construct SQL query
  int water_lvl = feet;  // Assign water level to feet value
  char location[] = "CEU Malolos";  // Default location
  
  char query[256];
  sprintf(query, "INSERT INTO db_aquapath.tbl_sensor_value (water_lvl, location) VALUES (%d, '%s')", water_lvl, location);

  // Execute query
  if (cursor.execute(query)) {
    Serial.println("Data sent to MySQL.");
  } else {
    Serial.println("Error executing query. Please check your SQL syntax or database state.");
  }

  delay(5000);
}
