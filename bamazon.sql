DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
item_id INTEGER(7) NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price FLOAT(7,2) NOT NULL,
stock_quantity INTEGER(7) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00001,"Ceramic Plate","Home",20.00,80);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00002,"Blanket","Home",15.00,50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00003,"Cookies","Food",3.00,90);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00004,"Bulk Soap","Beauty",13.00,60);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00005,"Eye Liner","Beauty",8.00,40);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00006,"Ice Cream","Food",7.00,100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00007,"Tooth Paste","Beauty",5.00,50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00008,"T-Shirts","Clothes",15.00,80);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00009,"Pants","Clothes",20.00,80);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (00010,"Pizza","Food",8.00,50);

