const inquirer = require ('inquirer');

const fs = require ('fs');

const {Circle, Rectangle, Triangle} = require('./assets/shape.js');

const fileName = `logo_${Date.now()}.svg`;

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
                    console.log('Thank You!')
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


const logoCreator = function(text, charColor, shape, backColor){
    console.log("start function");
    if (shape == "Triangle"){
        var logoShape = new Triangle();
        logoShape.setColor(backColor);
    }
    else if (shape == "Rectangle"){
        var logoShape = new Rectangle();
        logoShape.setColor(backColor);
    }
    else if (shape == "Circle"){
        var logoShape = new Circle();
        logoShape.setColor(backColor);
    }
    console.log(logoShape.render());
    console.log(text);
                    
var createdLogo = 
`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" version="1.1"  style="background-color:white">
${logoShape.render()}
<text x="108" y="120" font-size="50" fill="${charColor}">${text}</text>
</svg>`
        fs.writeFile(`./examples/${fileName}`, createdLogo, (err) => {
            if (err) {
            console.error(err);
            }
        });
console.log("done");
  }