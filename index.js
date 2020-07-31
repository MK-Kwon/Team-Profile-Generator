const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Developer = require("./lib/developer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team member's email address?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])
        .then(function (data) {
            console.log(data);
            const name = data.name;
            const id = 1;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            finalTeamArray.push(teamMember);
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add more team members?",
            choices: ["Yes, add a developer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])
        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add a developer":
                    addDeveloper();
                    break;
                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}
function addDeveloper() {
    inquirer.prompt([
        {
            message: "What is this developer's name?",
            name: "name"
        },
        {
            message: "What is this developer's email address?",
            name: "email"
        },
        {
            message: "What is this developer's Github profile?",
            name: "github"
        }
    ])
        .then(function (data) {

            const name = data.name;
            const id = finalTeamArray.length + 1;
            const email = data.email;
            const github = data.github;
            const teamMember = new Developer(name, id, email, github);

            finalTeamArray.push(teamMember);
            addTeamMembers();
        });
};
function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])
        .then(function (data) {
            const name = data.name;
            const id = finalTeamArray.length + 1;
            const email = data.email;
            const school = data.school;

            const teamMember = new Intern(name, id, email, school);
            finalTeamArray.push(teamMember);
            addTeamMembers();
        });
};

function compileTeam() {
    console.log("Complete")
    console.log(finalTeamArray);
}

const htmlArray = [];
const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    `
    htmlArray.push(htmlBeginning);

    for(let i = 0; i < finalTeamArray.length; i++) {
        let object = `
        <div>
            <p>${finalTeamArray[i].title}</p>
            <p>${finalTeamArray[i].id}</p>
            <p>${finalTeamArray[i].name}</p>
            <p>${finalTeamArray[i].email}</p>
        `
        if (finalTeamArray[i].officeNumber) {
            object += `
            <p>${finalTeamArray[i].officeNumber}</p>
            `
        }
        if (finalTeamArray[i].github) {
            object +=`
            <p>${finalTeamArray[i].github}</p>
            `
        }
        if (finalTeamArray[i].school) {
            object += `
            <p>${finalTeamArray[i].school}</p>
            `
        }
        object += `
        </div>
        `
        htmlArray.push(object);
    }
    const htmlEnd =`
    
</body>
</html>
`
    htmlArray.push(htmlEnd);


startingPrompt();