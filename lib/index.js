const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        message: "Please enter your name",
        name: "username"
    },
    {
        message: "How many team members are in your team?",
        name: "teamSize"
    },

]).then(function(data){
    console.log(data.teamSize);
});