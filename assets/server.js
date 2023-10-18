// Require inquirer and mysql2 packages
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cooljob_db'
});

// Start application with main prompt
const startApp = () => {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role'
        ]
    })
    .then(answers => {
        switch(answers.choice) {
        case 'View All Departments':
            viewAllDepartments();
            break;
        case 'View All Roles' :
            viewAllRoles();
            break;
        case 'View All Employees' :
            viewAllEmployees();
            break;
        case 'Add a Department' :
            addDepartment();
            break;
        case 'Add a Role' :
            addRole();
            break;
        case 'Add an Employee' :
            addEmployee();
            break;
        case 'Update an Employee Role' :
            updateEmployeeRole();
            break;
        }
    });
}

// Define functions for each choice
const viewAllDepartments = () => {
    db.query('SELECT id, name FROM department', (err, results) => {
        if (err) {
            console.log(err);
            startApp();
        }
        console.table(results);
        startApp();
    });
}

const viewAllRoles = () => {
    db.query(`SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id`, (err, results) => {
        if (err) {
            console.log(err);
            startApp();
        }
        console.table(results); 
        startApp();
    });
}

const viewAllEmployees = () => {
    db.query(`SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(e.first_name, ' ', e.last_name) AS manager 
    FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON m.id = e.manager_id`, (err, results) => {
        if (err) {
            console.log(err);
            startApp();
        }
        console.table(results);
        startApp();
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'deptName', 
            message: 'Enter the name of the department you want to add:'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, answer.deptName, (err, result) => {
            if (err) {
                console.log(err);
                startApp();
            }
            console.log(`Added ${answer.deptName} to departments!`);
            startApp();
        });
    });
}

const addRole = () => {
    inquirer.prompt([
        {
            name: 'roleTitle',
            message: 'Enter the title of the role you want to add:'
        },
        {
            name: 'roleSalary',
            message: 'Enter the salary of the role you want to add:'
        },
        {
            name: 'roleDept',
            message: 'Enter the department id of the role you want to add:'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
        db.query(sql, [answer.roleTitle, answer.roleSalary, answer.roleDept], (err, result) => {
            if (err) {
                console.log(err);
                startApp();
            }
            console.log(`Added ${answer.roleTitle} to roles!`);
            startApp();
        });
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'employeeFirstName',
            message: 'Enter the first name of the employee you want to add:'
        },
        {
            name: 'employeeLastName',
            message: 'Enter the last name of the employee you want to add:'
        },
        {
            name: 'employeeRole',
            message: 'Enter the role id of the employee you want to add:'
        },
        {
            name: 'employeeManager',
            message: 'Enter the manager id of the employee you want to add:'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        db.promise().query(sql, [answer.employeeFirstName, answer.employeeLastName, answer.employeeRole, answer.employeeManager], (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Added ${answer.employeeFirstName} ${answer.employeeLastName} to employees!`);
            startApp();
        });
    })
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'employeeId',
            message: 'Enter the id of the employee whose role you want to update:'
        },
        {
            name: 'employeeRole',
            message: 'Enter the new role id of the employee:'
        }
    ])
    .then(answer => {
        const sql = `UPDATE employee SET role_id =? WHERE id =?`;
        db.query(sql, [answer.employeeRole, answer.employeeId], (err, result) => {
            if (err) {
                console.log(err);
                startApp();
            }
            console.log(`Updated employee role!`);
            startApp();
        });
    });
};

// const updateEmployeeRole = () => {
//     // Query database for all employees
//     db.query('SELECT * FROM employee', (err, employees) => {
//       // Prompt user to select an employee to update 
//         inquirer.prompt([
//             {
//                 name: 'employeeId',
//                 type: 'list',
//                 choices: employees.map(emp => ({
//                     name: `${emp.first_name} ${emp.last_name}`, 
//                     value: emp.id
//                 }))
//             }
//         ])
//         .then(answer => {
//             const employeeId = answer.employeeId;
//             // Query database for all roles
//             db.query('SELECT * FROM role', (err, roles) => {
//                 // Prompt user to select new role
//                 inquirer.prompt([
//                     {
//                         name: 'roleId',
//                         type: 'list',
//                         choices: roles.map(role => ({
//                             name: role.title,
//                             value: role.id
//                         }))
//                     }
//                 ])
//                 .then(answer => {
//                     const roleId = answer.roleId;
//                     // Update employee role in database
//                     db.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
//                     console.log("Updated employee's role");
//                     startApp();
//                 });
//             });
//         });
//     });
// }

// other functions


startApp();