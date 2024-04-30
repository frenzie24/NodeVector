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
    }
    return findColorDataByName(input)
}

// array of questions to pass to Prompter class.
let questions = [{
    type: 'input',
    name: 'text',
    message: 'Please Enter 3 Characters'.green,
    validate: (input) => {
        if (input.length < 4) {
            return true;
        } else throw new Error('Too many characters entered.  Please try again.')
    }

}, {
    type: 'input',
    name: 'textColor',
    message: 'Enter your color '.rainbow,

    validate: (input) => {
        input.length != 0;
        return true;

    },
    filter: filterColorInput,
    suffix: '(in hex or by name):'.green,

}]
const handleAnswers = (answers) => {
    logger(answers, 'bgBlue');
    let circle = new Shapes.Circle(answers.textColor, answers.text, answers.textColor);
    console.log(circle.render());
};
let prompter = new Prompter(questions, handleAnswers);
prompter.startPrompt();