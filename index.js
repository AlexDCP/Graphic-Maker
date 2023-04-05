const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor',
        choices: ['Red', 'Blue', 'Yellow', 'Green'],
    }, 
    {
        type: 'list',
        message: 'What shape would you like for your graphic?',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'list',
        message: 'What would you like the text color to be?',
        name: 'textColor',
        choices: ['Red', 'Blue', 'Black', 'White'],
    },
    {
        type: 'input',
        message: 'Please select three characters for your graphic!',
        name: 'characters',
        validate: (input) => {
            if(input.length !== 3){
                return 'Must contain three characters!'
            }
            return true
        }
    },
];



function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let shape;
        if(answers.shape === 'Triangle') {
            shape = new Triangle();
        } else if(answers.shape === 'Circle') {
            shape = new Circle();
        } else if(answers.shape === 'Square') {
            shape = new Square();
        }
        shape.setShapeColor(answers.shapeColor);
        shape.setTextColor(answers.textColor);
        shape.setTextCharacters(answers.characters);
        
        console.log(shape);
        console.log(shape.render());
        fs.writeFile('./examples/graphic.svg', shape.render(), (err) =>
        err ? console.error(err) : console.log('Your SVG has been created!'));
        
    })
}


init();
