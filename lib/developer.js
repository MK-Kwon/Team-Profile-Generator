const Employee = require("./employee");

class Developer extends Employee {
    constructor(name, id, title, github){
        super(name, id, title);
        this.github = github;
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return "Developer";
    };
}
module.exports = Developer;