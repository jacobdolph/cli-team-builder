const inquirer = require("inquirer")

function newMember() {
    return inquirer
        .prompt([{
            name: "name",
            type: "input",
            message: "Please enter the team mamber name:"
        }, {
            name: "id",
            type: "input",
            message: "Please enter the ID:"
        }, {
            name: "email",
            type: "input",
            message: "Please enter the email?"
        }, {
            name: "role",
            type: "list",
            message: "Please enter the role on the team",
            choices: [
                "Intern",
                "Engineer",
                "Manager"
            ]
        }
        ])
}

module.exports = newMember()