// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        mesage: "What is the Title of your project?",
    },
    {
        name:"desc",
        message:"What is the Description of your project?",
    },
    {
        name:"install",
        message: "What are the installation instructions for your project?",
    },
    {
        name:"use",
        message:"What is your project used for?",
    },
    {
        name:"contrib",
        message:"How can someone else contribute to your project?",
    },
    {
        name:"test",
        message:"How can someone test your project?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}-Gen.md`, data, (err) => {
        if (err) {
            console.log(`File write was not successful: ${err}`);
        }
        else {
            console.log("File was successfilly written")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            let fileData = `
            # ${answers.title}\n
            ## Description
            ${answers.desc}\n
            ## Installation
            ${answers.install}\n
            ## Usage
            ${answers.use}\n
            ## Contributing
            ${answers.contrib}\n
            ## Tests
            ${answers.test}\n
            `;

            writeToFile("ReadME", fileData);
        })
        .catch(err => {
            if (err.isTtyError) {
                console.log("something is wrong with the environment");
            }
            else {
                console.log(`unknown error: ${err}`);
            }
        })
}

// Function call to initialize app
init();
