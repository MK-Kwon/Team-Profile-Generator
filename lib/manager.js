const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    getRole() {
        return this.title;
    }
    getOfficeNumber(){
        return this.officeNumber;
    };
}
module.exports = Manager;