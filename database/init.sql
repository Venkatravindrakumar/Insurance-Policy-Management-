CREATE DATABASE IF NOT EXISTS insurance_db;

USE insurance_db;

CREATE TABLE IF NOT EXISTS policies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    policy_number VARCHAR(50) NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    policy_type VARCHAR(100) NOT NULL,
    premium DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Active'
);

INSERT INTO policies
(policy_number, customer_name, policy_type, premium, status)
VALUES
('POL1001', 'Ravindra Kumar', 'Life Insurance', 25000.00, 'Active'),
('POL1002', 'Venkat Kumar', 'Health Insurance', 18000.00, 'Active'),
('POL1003', 'Suresh Kumar', 'Vehicle Insurance', 12000.00, 'Expired');