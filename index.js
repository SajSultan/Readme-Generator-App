const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Inquirer questions for project creator.
// function to initialize program
function init(questions) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message:
          "Provide a short description explaining the what, why, and how of your project?",
        name: "description",
      },
      {
        type: "input",
        message:
          "What are the steps required to install your project?",
        name: "installation",
      },
      {
        type: "input",
        message: "How to make contributions for your project?",
        name: "contribution",
      },
      {
        type: "input",
        message:
          "Provide instructions and examples for use with screenshots if possible?",
        name: "usage",
      },
      {
        type: "list",
        message: "License?",
        name: "license",
        choices: ["MIT", "ISC", "GNUPLv3", "Apache License 2.0", "Boost Software License"],
      },
      {
        type: "input"
        message: "What is the email for contact for questions regarding the project?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the linkedin url?",
        name: "linkedin",
      },
      {
        type: "input",
        message: "What is the github url?",
        name: "github",
      },
    ])
    .then((response) => {
      console.log(response);
      const readmeTemplate = generateMarkdown(response);
      fs.writeFile(`${response.title}_README.md`, readmeTemplate, (error) => {
        return error
          ? console.error(error)
          : console.log("Readme has been generated successfully!");
      })
    });
}
init();

