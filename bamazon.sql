CREATE database Bamazon;

USE Bamazon;

CREATE TABLE Products (
ItemId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
ProductName VARCHAR(100) NOT NULL,
DepartmentName VARCHAR(100) NOT NULL,
Price DECIMAL(6,2) NOT NULL,
StockQuantity INT(4) NOT NULL
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Macbook Pro","Computers", 200.39, 200);