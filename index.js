const inquirer = require ('inquirer');

const fs = require ('fs');

const {Circle, Rectangle, Triangle} = require('/assets/shape.js');


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
                choices: ['Circle', 'Rectangle', 'Triangle']
            },
            
            {
                type: 'input',
                message: 'What Color do you want the Shape that will be the background of your Logo to be?',
                name: 'backColor'
            }
        ])