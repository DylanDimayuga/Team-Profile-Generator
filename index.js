const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

const yourRole = {
    type: "list",
    message: "What member would you like to add?",
    name: "role",
    choices: ["Intern", "Engineer", "I am finished adding members."]
}

const Questions = {
    Manager: [
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
            message: "Enter your/their office number",
            name: "office"
        },
    ],
    Engineer: [
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
    ],
    Intern: [
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
    ],
}