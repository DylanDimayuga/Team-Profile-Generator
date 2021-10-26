const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require("fs")
const generateHTML = require('./generateHTML')
const generateCSS = require('./generateCSS')

class questions {
    constructor() {
        this.employees = []
    }

    promptUser() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter your name: ",
                name: 'name',
            },
            {
                type: "input",
                message: "Enter your/their ID number: ",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address: ",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their office number: ",
                name: "officeNumber",
            },
        ])
        .then(({name, id, email, officeNumber}) => {
            this.employees.push(new Manager(name, id, email, officeNumber));
            this.newRole();
        })
    }

    newRole() {
        inquirer.prompt({
            type: "list",
            message: "What member would you like to add?",
            name: "newRole",
            choices: ["Engineer", "Intern", "I am finished adding members."],
        })
        .then((data) => {
            if (data.newRole === "Engineer"){
                this.addEngineer()
            } else if (data.newRole === "Intern") {
                this.addIntern();
            } else {
                this.writeFile()
            }
        })
    }

    addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter your/their name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Enter your/their ID number: ",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address: ",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their github username: ",
                name: "github"
            },
        ])
        .then(({ name, id, email, github}) => {
            this.employees.push(new Engineer(name, id, email, github))
            this.newRole()
        })
    }

    addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter your/their name: ",
                name: "name",
            },
            {
                type: "input",
                message: "Enter your/their ID number: ",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address: ",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their school: ",
                name: "school"
            },
        ])
        .then(({name, id, email, school}) => {
            this.employees.push(new Intern(name, id, email, school))
            this.newRole()
        })
    }
    
    writeFile() {
        fs.writeFile('./dist/index.html', generateHTML(this.employees), (err) => {
            if (err) {
                console.log(err)
            } else
            console.log('The HTML file has successfully been created')
        })
        fs.writeFile('./dist/style.css', generateCSS(), (err) => {
            if (err) {
                console.log(err)
            } else
            console.log('The CSS file has successfully been created.')
        })
    }
}

module.exports = questions;