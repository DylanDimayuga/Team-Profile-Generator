const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class questions {
    constructor() {
        this.employees = []
    }

    promptUser() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter what you would like the name of the file to be",
                name: "fileName"
            },
            {
                type: "input",
                message: "Enter your name",
                name: 'name',
            },
            {
                type: "input",
                message: "Enter your/their ID number",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their office number",
                name: "office",
            },
        ])
        .then(({name, id, email, office}) => {
            this.employees.push(new Manager(name, id, email, office));
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
                message: "Enter your/their name",
                name: name,
            },
            {
                type: "input",
                message: "Enter your/their ID number",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their github username",
                name: "githubUser"
            },
        ])
        .then(({ name, id, email, githubUser }) => {
            this.employees.push(new Engineer(name, id, email, githubUser))
            this.newRole
        })
    }

    addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter your/their name",
                name: name,
            },
            {
                type: "input",
                message: "Enter your/their ID number",
                name: "id",
            },
            {
                type: "input",
                message: "Enter your/their email address",
                name: "email"
            },
            {
                type: "input",
                message: "Enter your/their school",
                name: "school"
            },
        ])
        .then(({name, id, email, school}) => {
            this.employees.push(new Intern(name, id, email, school))
            this.newRole
        })
    }
    
    writeFile() {
        const fileName = `${data.fileName.toLowerCase().split(' ').join('')}.html`
        fs.writeFile(fileName, generateHTML(this.employees), (err) => {
            if (err) {
                console.log(err)
            } else
            console.log('The HTML file has successfully been created')
        })
        fs.writeFile(style.css, generateCSS(), (err) => {
            if (err) {
                console.log(err)
            } else
            console.log('The CSS file has successfully been created.')
        })
    }
}

questions()