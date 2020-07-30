const Employee = require("./employee");

class Developer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.title = "Developer";
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return this.title;
    };
}
module.exports = Developer;