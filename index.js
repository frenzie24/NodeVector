let logger = require('./scripts/logger.js');

let colors = require('colors')
let { validateInput, filterInput } = require('./scripts/prompter.js')
let findColorDataByName = require('./scripts/colorFinder.js')
let Prompter = require('./scripts/prompter.js')
let Shapes = require('./scripts/shapes.js')
let fs = require('fs');
logger(colors.bgGray('Welcome to NodeVector'), 'brightBlue');
logger(colors.bgGray("#USAGE"), "brightGreen");
logger(colors.bgGray("Please follow prompts to create a simple SVG logo."), "magenta");

// filters color input for a hex or name search
const filterColorInput = (input) => {
    input.trim();
    if (input.slice(0, 1) == '#') {
        // if this is a hex value but there are not enough characters throw an error
        if (input.length !== 4 && input.length != 7) throw new Error('Incorrect hex length.  Please try again')
        // The hex has the appropriate # of characters, return the good hex value
        else return input;
    } else return findColorDataByName(input) // This was not a hex value, attempt a seach by name
}

// array of questions to pass to Prompter class.
let questions = [{
    type: 'input',
    name: 'text',
    message: 'Please Enter 3 Characters'.green,
    suffix: ' and no more.'.red,
    validate: (input) => {
        if (input.length < 4) {
            return true;
        } else throw new Error('Too many characters entered.  Please try again.')
    }

}, {
    type: 'input',
    name: 'textColor',
    message: 'Enter your text color '.rainbow,

    validate: (input) => {
        input.length != 0;
        return true;

    },
    filter: filterColorInput,
    suffix: '(in hex or by name):'.magenta,

}, {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter your shape color '.rainbow,

    validate: (input) => {
        input.length != 0;
        return true;

    },
    filter: filterColorInput,
    suffix: '(in hex or by name):'.magenta,

}, {
    type: 'list',
    name: 'shape',
    message: 'Select your shape '.white,
    choices: ['Square', 'Circle', 'Triangle'],
    validate: (input) => {
        // input.length != 0;
        return true;

    },


}]

// callback function we pass to our prompter class to handle user input
const handleAnswers = (answers) => {
    logger(answers, 'bgBlue');
    let svgString = ``;
    // s will store our shape element, all of our shapes inherit from shape
    let s;

    //ansers.shape can only be "Sqaure", "Circle", "Triangle", just in case default will create a square
    switch (answers.shape) {
        case 'Sqaure':
            // Creates a new Square
            s = new Shapes.Square(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        case 'Circle':
            // Creates a new Circle
            s = new Shapes.Circle(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        case 'Triangle':
            // Creates a new Triangle
            s = new Shapes.Triangle(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        default:
            // We don't know how we got here, but we caught something unexpected so create a new Square
            s = new Shapes.Square(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
    }
    // log the element to the console, then write the svg file
    logger(colors.bgBlack(svgString), 'brightGreen');
    fs.writeFile('logo.svg', svgString, (res) => {
        if (res != typeof (Error)) {
            logger('Generated logo.svg', 'bgGreen');
            logger('Open your logo.svg in a broswer to see your result!', 'bgGreen');
        } else {
            logger(`Error occured: ${res}`, 'bgRed');
        }
    })
};
let prompter = new Prompter(questions, handleAnswers);
prompter.startPrompt();