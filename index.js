const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./html/html");

let team = [];

const managerQuestions = [
    {
        type: "input",
        name: "fName",
        message: "What is the manager's first name?"
    },
    {
        type: "input",
        name: "lName",
        message: "What is the manager's last name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "member",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Exit"]
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "fName",
        message: "What is the engineer's first name?"
    },
    {
        type: "input",
        name: "lName",
        message: "What is the engineer's last name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineers's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
    },
    {
        type: "list",
        name: "member",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Exit"]
    }
];
const internQuestions = [
    {
        type: "input",
        name: "fName",
        message: "What is the intern's first name?"
    },
    {
        type: "input",
        name: "lName",
        message: "What is the interns's last name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the intern's university?"
    },
    {
        type: "list",
        name: "member",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Exit"]
    }
];

function determineUserChoice (choices){
    if(choices === "Engineer"){
        createEngineerProfile();
    }else if(choices === "Intern"){
        createInternProfile();
    }else if(choices === "Exit"){
        console.info("You have successfully created a team profile.")
        writeToFile(team);
        return
    }
};

function createManagerProfile (){
    inquirer.prompt(managerQuestions)
        .then(function(response){
            const manager = new Manager(response.fName, response.lName, response.id, response.email, response.office);
            team.push(manager);
            console.info(team)
            determineUserChoice(response.member);
        })
};

function createInternProfile (){
    inquirer.prompt(internQuestions)
        .then(function(response){
            const intern = new Intern(response.fName, response.lName, response.id, response.email, response.school);
            team.push(intern);
            console.info(team)
            determineUserChoice(response.member);
        })
};

function createEngineerProfile (){
        inquirer.prompt(engineerQuestions)
            .then(function(response){
                const engineer = new Engineer(response.fName, response.lName, response.id, response.email, response.github);
                team.push(engineer);
                console.info(team)
                determineUserChoice(response.member);
            })
};

function writeToFile(team){
    fs.writeFile("./dist/index.html", generateHTML(team), (err)=> {
        err ? console.log(err) : console.log("Successfully Generated HTML file");
    })
};

createManagerProfile();