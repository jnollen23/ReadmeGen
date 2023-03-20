// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        mesage: "What is the Title of your project?",
    },
    {
        name: "description",
        message: "What is the Description of your project?",
    },
    {
        name: "install",
        message: "What are the installation instructions for your project?",
    },
    {
        name: "usage",
        message: "What is your project used for?",
    },
    {
        name: "license",
        message: "What license do you have on the project",
        type: "list",
        choices: ['None', 'MIT', 'GNU General Public License 3.0', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 
        'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        name: "contrib",
        message: "How can someone else contribute to your project?",
    },
    {
        name: "test",
        message: "How can someone test your project?",
    },
    {
        name: "github",
        message: "What is your github username?",
    },
    {
        name: "email",
        message: "What is an email someone can reach you at?",
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
            let fileData = `# ${answers.title}\n
## Usage
${answers.usage}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Contributing](#contributing)
[Tests](#test)
[License](#license)
[Questions](#questions)

## Description
${answers.description}

## Installation
${answers.install}

## Contributing
${answers.contrib}

## Tests
${answers.test}

## License
${answers.license}

## Questions
Direct questions can be sent to:${answers.email}  
Visit my github repos at:https://github.com/${answers.github}`;

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
