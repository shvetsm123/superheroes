CREATE TABLE customers(
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    email VARCHAR(256)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    price DECIMAL(10, 2)
);

CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
    FOREIGN KEY (product_id) REFERENCES products (product_id)
);

/////////

INSERT INTO customers(name, email) VALUES 
('Ivan Ivanov', 'ivan@gmail.com'),
('Petr Petrov', 'petr@gmail.com'),
('Sodir Sidorov', 'sidor@gmail.com'); -- ничего не заказал

INSERT INTO products(name, price) VALUES 
('Samsung', 500.5),
('Huawei', 356),
('Xiaomi', 420.65), -- никто не заказал
('Iphone', 799.99);

INSERT INTO orders(customer_id, product_id, quantity) VALUES 
(1, 1, 1), 
(1, 2, 1),
(1, 4, 1),
(2, 2, 1);


///////////

SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id
INNER JOIN products ON orders.product_id = products.product_id; -- полная инфа о заказах

SELECT * FROM customers
LEFT JOIN orders ON orders.customer_id = customers.customer_id; -- полная инфа о заказчиках

SELECT * FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.customer_id; 

SELECT * FROM customers
FULL JOIN orders ON orders.customer_id = customers.customer_id
FULL JOIN products ON orders.customer_id = products.product_id;

DROP TABLE orders;
DROP TABLE customers;
DROP TABLE products;