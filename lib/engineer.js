const Employee = require("./employee");

class Engineer extends Employee {
    constructor (firstName, lastName, id, email, github){
        super(firstName, lastName, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;