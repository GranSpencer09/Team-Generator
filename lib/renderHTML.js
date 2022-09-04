const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

const renderManager = function (manager) {
  return `<div class="py-3 card" style="width: 18rem">
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
              <li class="list-group-item">ID:${manager.id}</li>
              <li class="list-group-item">Email:${manager.email}</li>
              <li class="list-group-item">Office number:${manager.officeNumber}</li>
            </ul>
          </div>`;
};

const renderEngineer = function (engineer) {
  return `<div class="pb-3 card" style="width: 18rem">
            <div class="card-body">
              <h5>
                ${name}
                <img
                  src="../images/engineer.png"
                  style="width: 15%"
                  class="card-img-top"
                  alt="Icon showing a directory consisting of 3 files"
                />
              </h5>
              <h6>${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email:${email}</li>
              <li class="list-group-item">Office number:${officeNumber}</li>
            </ul>
          </div>`;
};

const renderIntern = function (intern) {
  return `<div class="pb-3 card" style="width: 18rem">
            <div class="card-body">
              <h5>
                ${name}
                <img
                  src="../images/internship.png"
                  style="width: 15%"
                  class="card-img-top"
                  alt="Icon showing a directory consisting of 3 files"
                />
              </h5>
              <h6>${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID:${id}</li>
              <li class="list-group-item">Email:${email}</li>
              <li class="list-group-item">Office number:${officeNumber}</li>
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

function renderHTML(team) {
  let teammates = [];

  for (let i = 0; i < team.length; i++) {
    const teammate = team[i];
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
}

// export to index
module.exports = renderHTML;
