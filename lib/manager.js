const Employee = require("./employee");

class Manager extends Employee {
    constructor(firstName, lastName,id,email, officeNumber){
        super(firstName, lastName, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
};

module.exports = Manager;