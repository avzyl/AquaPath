CREATE TABLE tbl_water_lvls (
  id INT AUTO_INCREMENT PRIMARY KEY,
  water_lvl INT,
  location VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
