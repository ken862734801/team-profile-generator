const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

function generateHTML (team) {

    let cards = [];

    let htmlHeader = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <div class="container w-75 d-flex flex-wrap p-3" style="justify-content:center;">`;

    let htmlFooter = `</div>

    </body>
    <script src="https://kit.fontawesome.com/178167676b.js" crossorigin="anonymous"></script>
    </html>`;

    for(i=0; i < team.length; i++){
        if(team[i].getRole()=== "Manager"){
            const managerCard = generateManagerCard(team[i]);
            cards.push(managerCard);
        }else if(team[i].getRole() === "Engineer"){
           const engineerCard = generateEngineerCard(team[i]);
           cards.push(engineerCard);
        }else if(team[i].getRole() === "Intern"){
           const internCard = generateInternCard(team[i]);
           cards.push(internCard);
        }
    }

    return htmlHeader + cards.join(" ") + htmlFooter
};

function generateManagerCard(employee){

    let firstInitial = employee.firstName.substring(0,1);
    let secondInitial = employee.lastName.substring(0,1);

  return `<div class="card shadow m-2" style = "min-width: 17rem;">
    <div class="card-header p-3" style="background-color:white;">
        <div class="d-flex profile-picture rounded-circle" style="background-color:rgb(250, 203, 110); width:80px; height:80px; margin: 6px auto; justify-content: center; align-items: center;">
            <p style="font-size:1.75em; font-weight:bold; color: rgb(165, 132, 85) ;margin-top:14px;">${firstInitial + secondInitial}</p>
        </div>
        <p class="text-center" style="margin-top:8px; font-weight:bold;">${employee.firstName + employee.lastName}</p>
        <p class="text-center" style="margin-top:-18px; font-size:0.95em; color:gray;">${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-envelope fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px; padding-bottom:16px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">Email:</p>
                <a href="mailto:${employee.email}">${employee.email}</a>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-user fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">ID:</p>
                <p>${employee.id}</p>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-solid fa-building fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">Office Number:</p>
                <p>${employee.getOfficeNumber()}</p>
            </div>
        </li>
      </ul>
</div>`

};

function generateEngineerCard(employee){

    let firstInitial = employee.firstName.substring(0,1);
    let secondInitial = employee.lastName.substring(0,1);
    
    return `<div class="card shadow m-2" style = "min-width: 17rem;">
    <div class="card-header p-3" style="background-color:white;">
        <div class="d-flex profile-picture rounded-circle" style="background-color:rgb(206, 252, 255); width:80px; height:80px; margin: 6px auto; justify-content: center; align-items: center;">
        <p style="font-size:1.75em; font-weight:bold; color: rgb(165, 132, 85) ;margin-top:14px;">${firstInitial + secondInitial}</p>
        </div>
        <p class="text-center" style="margin-top:8px; font-weight:bold;">${employee.firstName + employee.lastName}</p>
        <p class="text-center" style="margin-top:-18px; font-size:0.95em; color:gray;">${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-envelope fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px; padding-bottom:16px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">Email:</p>
                <a href="mailto:${employee.email}">${employee.email}</a>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-user fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">ID:</p>
                <p>${employee.id}</p>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-solid fa-code-compare fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">GitHub:</p>
                <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>
            </div>
        </li>
      </ul>
</div>`
}

function generateInternCard(employee){

    let firstInitial = employee.firstName.substring(0,1);
    let secondInitial = employee.lastName.substring(0,1);

    return `<div class="card shadow m-2" style = "min-width: 17rem;">
    <div class="card-header p-3" style="background-color:white;">
        <div class="d-flex profile-picture rounded-circle" style="background-color:rgb(228, 231, 231); width:80px; height:80px; margin: 6px auto; justify-content: center; align-items: center;">
        <p style="font-size:1.75em; font-weight:bold; color: rgb(165, 132, 85) ;margin-top:14px;">${firstInitial + secondInitial}</p>
        </div>
        <p class="text-center" style="margin-top:8px; font-weight:bold;">${employee.firstName + employee.lastName}</p>
        <p class="text-center" style="margin-top:-18px; font-size:0.95em; color:gray;">${employee.getRole()}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-envelope fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px; padding-bottom:16px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">Email:</p>
                <a href="mailto:${employee.email}">${employee.email}</a>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-regular fa-user fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">ID:</p>
                <p>${employee.id}</p>
            </div>
        </li>
        <li class="list-group-item p-2 m-0 d-flex" style="align-items:center;">
            <i class="fa-solid fa-building-columns fa-lg" style="margin:0px 8px;"></i>
            <div style="margin-left:10px;">
                <p style="padding-top: 8px; margin-bottom:-3px; color:gray; font-size:0.95em;">University:</p>
                <p>${employee.school}</p>
            </div>
        </li>
      </ul>
</div>`

}