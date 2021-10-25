// const fs = require('fs')
// const inquirer = require('inquirer')


// basicQuestions = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is your ID#?'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email?'
//         },
//     ])
// };

class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return (this.name)
    }
    getId() {
        return (this.id)
    }
    getEmail() {
        return (this.email)
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;