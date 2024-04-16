const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js')


function makeCircle(answers){
    const circle = new Circle(answers.name, answers.text, answers.shapeColor)
    return circle.render();
}
function makeSquare(answers){
    const square = new Square(answers.name, answers.text, answers.shapeColor)
    return square.render();
}
function makeTriangle(answers){
    const triangle = new Triangle(answers.name, answers.text, answers.shapeColor)
    return triangle.render();
}

function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's the 3 letter abreviation for your project?"
        },
        {
            type: "input",
            name: "text",
            message: "What color would you like to use for the text?",
        },
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like to use?",
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color would you like the shape to be?",
        }
    ])
    .then((answers)=>{    
        
        if (answers.shape == "circle"){
            fs.writeFile('logo.svg', makeCircle(answers), (err) => 
         err ? console.log(err) : console.log('logo.svg created'));
        } else if (answers.shape == "square"){
            fs.writeFile('logo.svg', makeSquare(answers), (err) => 
         err ? console.log(err) : console.log('logo.svg created'));
        } else if (answers.shape == 'triangle'){
            fs.writeFile('logo.svg', makeTriangle(answers), (err) => 
         err ? console.log(err) : console.log('logo.svg created'));
        }
        
    })
}

//function call to initialize the app
init();