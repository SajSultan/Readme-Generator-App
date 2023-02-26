const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//Inquirer questions for user.
inquirer.prompt(
    [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project app?",
            name: "description"
        },
        {
            type: "input",
            message: "How do you use the project?",
            name: "usage"
        },
        {
            type: "input",
            message: "How do you install the project?",
            name: "installation"
        },
        {
            type: "input",
            message: "How to report issues for your project?",
            name: "reporting-issues"
        },
        {
            type: "input",
            message: "How to make contributions for your project?",
            name: "contribution-info"
        },
        {
            type: "input",
            message: "How to make contributions for your project?",
            name: "contribution-info"
        },    
    ]
)
.then((response) => {
    console.log(response);
    const readmeTemplate = generateMarkdown(response)
})
// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // // function call to initialize program
// // init();
