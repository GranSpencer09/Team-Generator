const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const renderHTML = require("./renderHTML");
//const { template } = require("@babel/core");

const team = [];

function addEngineer() {
  inquirer
    .prompt([
      {
        // Prompt user to enter the engineer’s name, ID, email, and GitHub username, and then they're taken back to the menu
        type: "input",
        message: "Enter the engineer’s name",
        name: "name",
      },
      {
        type: "number",
        message: "Enter the engineer’s ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the engineer’s email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the engineer’s Github username",
        name: "git",
      },
    ])
    .then((choice) => {
      const engineer = new Engineer(
        choice.name,
        choice.id,
        choice.email,
        choice.git
      );
      team.push(engineer);
      buildTeam();
      console.log(engineer);
      console.log(team);
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the intern’s name",
        name: "name",
      },
      {
        type: "number",
        message: "Enter the intern’s ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the intern’s email",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the intern’s school",
        name: "school",
      },
    ])
    .then((choice) => {
      const intern = new Intern(
        choice.name,
        choice.id,
        choice.email,
        choice.school
      );
      team.push(intern);
      buildTeam();
      console.log(intern);
      console.log(team);
    });
}
function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Select to to add an engineer, add an intern or finish building your team",
        choices: ["Add engineer", "Add intern", "Finish building team"],
        name: "team",
      },
    ])
    .then((choice) => {
      console.log("inside buildteam", team);
      if (choice.team === "Add engineer") {
        addEngineer();
      } else if (choice.team === "Add intern") {
        addIntern();
      } else {
        movetoRender();
      }
    });
}

function movetoRender() {
  fs.writeFile("./createdIndex.html", renderHTML(team), function () {
    console.log("team inside movetoRender", team); // this returns undefined, why?? i need to pass the array of objects to renderHTML
  });
  console.log("Making your team chart now!");
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter team manager's name",
        name: "name",
      },
      {
        type: "number",
        message: "Enter team manager's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter team manager's email address",
        name: "email",
      },
      {
        type: "number",
        message: "Enter team manager's office number",
        name: "officeNumber",
      },
    ])
    .then((choice) => {
      const manager = new Manager(
        choice.name,
        choice.id,
        choice.email,
        choice.officeNumber
      );
      team.push(manager);
      buildTeam();
      // console.log(manager);
      // console.log(team);
    });
}

addManager();
