#include <Arduino.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Define connections to sensor
#define TRIGPIN D6 // GPIO 12
#define ECHOPIN D5 // GPIO 14

LiquidCrystal_I2C lcd(0x27, 16, 2); // I2C address 0x27, 16x2 LCD

float duration;
int feet, cm, inches;

void setup(void) {
  Serial.begin(115200);

  pinMode(ECHOPIN, INPUT);
  pinMode(TRIGPIN, OUTPUT);

  // Initialize LCD
  lcd.begin(16, 2);
  lcd.backlight();
  
  // Print "Kagayaku Soup" for the first 20 seconds
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Kagayaku Soup");
  
  // Keep it displayed for 20 seconds
  delay(20000);

  // After 20 seconds, print "Distance:"
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Distance:");
}

void loop() {
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

  // Display distance on LCD
  lcd.setCursor(0, 1); // Move to the second line
  lcd.print(String(feet) + " ft, " + String(cm) + " cm");

  // Print result to serial monitor
  Serial.print("Feet: ");
  Serial.print(feet);
  Serial.println(" ft");
  Serial.print("Centimeters: ");
  Serial.print(cm);
  Serial.println(" cm");

  delay(5000); // Delay for 5 seconds before the next loop
}
