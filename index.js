// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');
const generateGraphic = require('./lib/generateGraphic');

const questions = [
    {
        type: 'input',
        message: 'Please select three characters for your graphic!',
        name: '',
    },
    {
        type: 'input',
        message: 'What would you like the text color to be?',
        name: '',
    },
    {
        type: 'list',
        message: 'What shape would you like for your graphic?',
        name: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: '',
    },
];

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateGraphic(data), (err) =>
//     err ? console.error(err) : console.log('Success!'))
// }

// function init() {
//     inquirer
//     .prompt(questions)
//     .then((data) => {
//         writeToFile('./examples/graphic.svg', data);
//     });
// }