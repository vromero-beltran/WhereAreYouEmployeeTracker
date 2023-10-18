# Where Are You Employee Tracker

  ## Description
  This app allows you to set up departments as titles, roles inside the departments with salaries, managers with roles, and employees with a manager and a role. You can add departments, roles, managers, employees, and even modify them.
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Acceptance Criteria](#acceptancecriteria)
  - [Bonus](#bonus)
  ## Installation
  The following necessary dependencies must be installed to run the application, Express, Inruirer, and Mysql12
  ## Usage
  In order to use this app, Step 1: Start with opening an integrated terminal at db folder. Step 2: Start up mysql. Step 2a: Type USE cooljob_db. Step 2b: Type SOURCE schema.sql. Step 2c: Type SOURCE seeds.sql. Step 3: Open another integrated terminal at assets folder. Step 4: Type in npm start or node server.js. After finishing your prompts the database will be update and make sure to start the process over from step 2b.
  ## License
  
  This project is licensed under the The MIT License license.
  This project is licensed under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT).
  The license link can be found here https://opensource.org/licenses/MIT.
  ## Contributing
  Contributors: Victor Romero-Beltran
  ## Tests
  The following is needed in order to run the test: "Not applicable to this project"
  ## Questions
  If you have any other questions about this project, please contact me directly at VRomero.Beltran2016@gmail.com or through GitHub at https://github.com/vromero-beltran.
  
  
  ## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

Fulfilling any of the following can add up to 20 points to your grade. Note that the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points).

* Application allows users to view employees by manager (2 points).

* Application allows users to view employees by department (2 points).

* Application allows users to delete departments, roles, and employees (2 points for each).

* Application allows users to view the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department (8 points).
- - -
© 2023 Victor Romero-Beltran. Confidential and Proprietary. All Rights Reserved.
