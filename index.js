let logger = require('./scripts/logger.js');
let { validateInput, filterInput } = require('./scripts/prompter.js')
let findColorDataByName = require('./scripts/colorFinder.js')
let Prompter = require('./scripts/prompter.js')
let Shapes = require('./scripts/shapes.js')
logger('hello world', 'blue');

const filterColorInput = (input) => {
    input.trim();
    if (input.slice(0, 1) == '#') {
        if (input.length !== 4 && input.length != 7) throw new Error('Incorrect hex length.  Please try again')
        else return input;
    } else return findColorDataByName(input)
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
const handleAnswers = (answers) => {
    logger(answers, 'bgBlue');
    let svgString = ``;
    let s;
    if (answers.shapeColor.hex) answers.shapeColor = answers.shapeColor.hex;
    switch (answers.shape) {
        case 'Sqaure':

            s = new Shapes.Square(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        case 'Circle':

            s = new Shapes.Circle(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        case 'Sqaure':

            s = new Shapes.Triangle(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
        default:
            s = new Shapes.Square(answers.shapeColor, answers.text, answers.textColor);
            svgString = s.render();
            break;
    }
    console.log(svgString);
};
let prompter = new Prompter(questions, handleAnswers);
prompter.startPrompt();