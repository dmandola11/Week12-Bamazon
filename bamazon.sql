CREATE database Bamazon;

USE Bamazon;

CREATE TABLE Products (
ItemId INT NOT NULL PRIMARY KEY,
ProductName VARCHAR(100) NOT NULL,
DepartmentName VARCHAR(100) NOT NULL,
Price DECIMAL(6,2) NOT NULL,
StockQuantity INT(4) NOT NULL
);