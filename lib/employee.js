class Employee {
    constructor (name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.getEmail;
    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.getEmail;
    };
    getRole() {
        return "employee";
    };
}

module.exports = Employee;