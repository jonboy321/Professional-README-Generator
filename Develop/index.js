// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose license type',
        choices: ['MIT', 'Apache', 'ISC', 'none'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who can contribute?.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email',
    },
    {
        type:'input',
        name: 'github',
        message: 'Enter gitHub username.'
    }
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {writeToFile('README.md', generateMarkdown({...response}))   
    }
    )
}

// Function call to initialize app
init();