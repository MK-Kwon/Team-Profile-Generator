const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/employee");
const developer = require("./lib/developer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team member's e-mail address?",
            name: "e-mail"
        },
        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])
        .then(function(data) {
            console.log(data)
            addTeamMembers();
        });

    function addTeamMembers() {
        inquirer.prompt([
            {
                type: "list",
                message: "Do you want to add more team members?",
                choices: ["Yes, add a developer", "Yes, add an intern", "No, my team is complete"],
                name: "addMemberData"
            }
        ])
            .then(function(data) {
                console.log(data.addMemberData);

                switch (data.addMemberData) {
                    case "Yes, add a developer":
                          addDeveloper();
                          break;
                    
                }
            })
    }
}