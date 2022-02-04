CREATE DATABASE productsdb IF NOT EXISTS;

use productsdb;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(400) NOT NULL,
  price DECIMAL,
  createdAt TIMESTAMP CURRENT_TIMESTAMP
);

describe product;