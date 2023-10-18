INSERT INTO departments (department_name)
VALUES 
('Sales'),
('Marketing'),
('Engineering'),
('Finance'), 
('Operations'),
('Customer Support'),
('Research'),
('Legal'),
('Human Resources'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Sales Representative', 75000, 1), 
('Marketing Analyst', 65000, 2),
('Software Engineer', 100000, 3),  
('Accountant', 85000, 4),
('Operations Manager', 110000, 5),
('Customer Support Specialist', 45000, 6),
('Research Scientist', 95000, 7),
('Lawyer', 125000, 8),  
('HR Manager', 100000, 9),
('Network Administrator', 80000, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, 1),
('Jane', 'Doe', 2, 2),  
('Bob', 'Smith', 3, 3),
('Sara', 'Jones', 4, 4),
('Chris', 'Lee', 5, 5),
('Jessica', 'Chen', 6, 6),
('Mark', 'Wilson', 7, 7),  
('Emily', 'Brown', 8, 8),
('David', 'Kim', 9, 9),
('Olivia', 'Davis', 10, 10),
('Michael', 'Scott', 1, 1),
('Dwight', 'Schrute', 2, 2),
('Jim', 'Halpert', 3, 3),  
('Pam', 'Beesly',4, 4),
('Ryan', 'Howard', 5, 5),  
('Angela', 'Martin', 6, 6),
('Oscar', 'Martinez', 7, 7),
('Phyllis', 'Vance', 8, 8),
('Stanley', 'Hudson', 9, 9),
('Meredith', 'Palmer', 10, 10);