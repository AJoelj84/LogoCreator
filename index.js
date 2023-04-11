// Variables for usage of Inquirer, fs, and Shapes
const inquirer = require ('inquirer');
const fs = require ('fs');
const {Circle, Rectangle, Triangle} = require('./lib/shape.js');

// Variable To Create Unique Logo names and So that Previously Made Logos are Not Deleted
const fileName = `logo_${Date.now()}.svg`;


// Inquirer Prompt for Questions on Logo Creation
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter Your Logos Characters up to Three.',
                name: 'text'
            },

            {
                type: 'input',
                message: 'What Color would you like your Logos Characters to be?',
                name: 'charColor'
            },

            {
                type: 'rawlist',
                message: 'Pick the Shape of Your Logo.',
                choices: ['Circle', 'Rectangle', 'Triangle'],
                name: 'shape'
            },
            
            {
                type: 'input',
                message: 'What Color do you want the Shape that will be the background of your Logo to be?',
                name: 'backColor'
            }
        ])

                .then((answers) => {
                    console.log('Thank You Generating Logo!')
                    logoCreator(answers.text, answers.charColor, answers.shape, answers.backColor);
                })
                    .catch((error)=>{
                        if(error.isTtyError){
                            console.log('Could Not Log in Current Enviroment!')
                        }
                        else{
                            console.log('Unknown Error!');
                        }
                    });

//Variables to Set Text height and To Set What Shape, and Its Colors are Being Generated 
let textX =('');
let textY =('');
const logoCreator = function(text, charColor, shape, backColor){
    console.log("start function");
    if (shape == "Triangle"){
        var logoShape = new Triangle();
        logoShape.setColor(backColor);
        textX = '95';
        textY = '150';
    }
    else if (shape == "Rectangle"){
        var logoShape = new Rectangle();
        logoShape.setColor(backColor);
        textX = '90';
        textY = '115';
    }
    else if (shape == "Circle"){
        var logoShape = new Circle();
        logoShape.setColor(backColor);
        textX = '105';
        textY = '120';
    }
//Variable for Creation Of Logo, and the fs function to Write the new SVG logo Files    
var createdLogo = 
`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" version="1.1"  style="background-color:white">
${logoShape.render()}
<text x="${textX}" y="${textY}" font-size="50" fill="${charColor}">${text}</text>
</svg>`
        fs.writeFile(`./logos/${fileName}`, createdLogo, (err) => {
            if (err) {
            console.error(err);
            }
        });
console.log("done");
  }