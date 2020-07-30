const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/Employee");
const developer = require("./lib/Developer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

inquirer.prompt([
    {
        message: "Please enter your name",
        name: "username"
    },
    {
        message: "How many team members are in your team?",
        name: "teamSize"
    },
]).then(function(data) {
    console.log(data.teamSize);
});
