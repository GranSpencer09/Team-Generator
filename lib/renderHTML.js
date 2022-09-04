const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

// add links to emails, githubs
{
  /* <a href = "mailto: ${manager.email}"> ${manager.email}</a>

<a href="https://www.w3schools.com/" target="_blank">
  Visit W3Schools!
</a>; */
}

const renderManager = function (manager) {
  return `<div class="pb-3 card" style="width: 18rem">
            <div class="card-body">
              <h5>
                ${manager.name}
                <img
                  src="../images/data-management.png"
                  style="width: 15%"
                  class="card-img-top"
                  alt="Icon showing a directory consisting of 3 files"
                />
              </h5>
              <h6>${manager.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${manager.email}" target="_blank"> ${manager.email}</a></li>
              <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
          </div>`;
};

const renderEngineer = function (engineer) {
  return `<div class="pb-3 card" style="width: 18rem">
            <div class="card-body">
              <h5>
                ${engineer.name}
                <img
                  src="../images/engineer.png"
                  style="width: 15%"
                  class="card-img-top"
                  alt="Icon showing a directory consisting of 3 files"
                />
              </h5>
              <h6>${engineer.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}" target="_blank"> ${engineer.email}</a></li>
              <li class="list-group-item">Github username: <a href = "https://github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></li>
            </ul>
          </div>`;
};

const renderIntern = function (intern) {
  return `<div class="pb-3 card" style="width: 18rem">
            <div class="card-body">
              <h5>
                ${intern.name}
                <img
                  src="../images/internship.png"
                  style="width: 15%"
                  class="card-img-top"
                  alt="Icon showing a directory consisting of 3 files"
                />
              </h5>
              <h6>${intern.role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <a href = "mailto: ${intern.email}" target="_blank"> ${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
          </div>`;
};

const renderPage = function (team) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Dream Team</title>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 py-3 mb-5 bg-primary text-white">
          <h1 class="text-center">The Dream Team!</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- https://getbootstrap.com/docs/5.2/utilities/flex/#enable-flex-behaviors -->

        <div class="team-area col-12 d-flex justify-content-around flex-wrap">
          ${team}
        </div>
      </div>
    </div>
  </body>
</html>`;
};

const renderHTML = function (team) {
  // create array i can push specific objects to
  let teammates = [];

  // loop through team array of team member objects
  //                  this is where the error occurs, team is empty
  for (let i = 0; i < team.length; i++) {
    const teammate = team[i];
    // each team member object has a key called 'role', can I use that that instead of creating a variable here and use the key-value in the following if statement
    const job = teammate.getRole();

    if (job === "Manager") {
      let renderedManager = renderManager(teammate);
      teammates.push(renderedManager);
    } else if (job === "Engineer") {
      let renderedEngineer = renderEngineer(teammate);
      teammates.push(renderedEngineer);
    } else if (job === "Intern") {
      let renderedIntern = renderIntern(teammate);
      teammates.push(renderedIntern);
    }
  }
  let teamCards = teammates.join("");
  let readyPage = renderPage(teamCards);
  return readyPage;
};

// export to index
module.exports = renderHTML;
