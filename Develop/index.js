// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [];

const generateReadME = ({title, description, table, install, usage, license, contributing, tests, email, github}) =>
``;

inquirer.prompt([
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
        name: 'table',
        message: 'Insert a Table of Contents',
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
        type: 'input',
        name: 'license',
        message: 'Enter license type.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who can contribute?.',
    },
    {
        type: 'input',
        name: 'tests',
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
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();