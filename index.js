// TODO: Include packages needed for this application
import inquirer from 'inquirer';
const fs = require('FS');
// TODO: Create an array of questions for user input
const questions = [
    "What is the Title of your project?",
    "What is the Description of your project?",
    "What are the installation instructions for your project?",
    "What is your project Used for?",
    "How can someone else contribute to your project?",
    "How can someone test your project?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
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
            console.log(answers);
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
