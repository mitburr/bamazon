DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) Not NULL,
  department VARCHAR(255),
  price DECIMAL(10,2) Not NULL,
  stock INT,
);

INSERT INTO products (name,department,price, stock)
VALUES ("apple", "grocery", 1.55, 1000);

INSERT INTO products (name,department,price, stock)
VALUES ("beef", "grocery", 6, 100);

INSERT INTO products (name,department,price, stock)
VALUES ("bread", "grocery", 3, 240);

INSERT INTO products (name,department,price, stock)
VALUES ("T-shirt", "clothing", 20, 50);

INSERT INTO products (name,department,price, stock)
VALUES ("jeans", "clothing", 40, 50);

INSERT INTO products (name,department,price, stock)
VALUES ("pairs of shoes", "clothing", 60, 50);

INSERT INTO products (name,department,price, stock)
VALUES ("TV", "electronics", 250, 20);

INSERT INTO products (name,department,price, stock)
VALUES ("apple", "grocery", 600, 10);

INSERT INTO products (name,department,price, stock)
VALUES ("Monopoly", "toys", 20, 100);

INSERT INTO products (name,department,price, stock)
VALUES ("train set", "toys", 120, 30);