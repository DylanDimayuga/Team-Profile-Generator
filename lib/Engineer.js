const Employee = require('./Employee')
    class Engineer extends Employee {
        constructor(githubUser){
            super(name, id, email)
            this.githubUser = githubUser
        }
        getGithub(){
            return this.githubUser
        }
        getRole(){
            return "Engineer"
        }
    }

    module.exports = Engineer