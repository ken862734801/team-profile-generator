const inquirer = require('inquirer');
const fs = require('fs');

let team = [];

function addMember() {
    inquirer
    .prompt([
        {
            name: "name",
            message: "Enter a team members name."
        },
        {
            type: "list",
            name: "role",
            message: "Select this team member's role.",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: "id",
            message: "Enter this team member's id."
        },
        {
            name: "email",
            message: "Enter this team member's email."
        }
    ])
    .then(function({response}){
        console.info(response)
        if(response.role === "Manager"){
            
        }
    })
};

addMember();

