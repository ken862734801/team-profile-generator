const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

function generateHTML (team) {

    let html;
    
    for(i=0; i < team.length; i++){
        if(team[i].getRole()=== "Manager"){
            generateManagerCard();
        }else if(team[i].getRole() === "Engineer"){
            generateEngineerCard();
        }else if(team[i].getRole() === "Intern"){
            generateInternCard()
        }
    }
    return html
};

function generateManagerCard(){

}

function generateEngineerCard(){

}

function generateInternCard(){

}