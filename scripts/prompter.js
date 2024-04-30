
let inquirer = require('inquirer');


// filterInput is used in every prompt

// class prompter requires a questions obj and a callback function when initialized
async function Prompter(questions) {
    this.questions = questions;

    // for every question, add validateInput and filterInput to their object
    this.questions.map(question => {
        question.validate = validateInput;
        question.filterInput = filterInput;
    });

    await inquirer.prompt(questions).then(answer => {
        logger(answer, 'bgBlue');
    });

    filterInput = (input) => {
        return input.trim();
    }
    validateInput = (input) => {
        if (!input.length) {
            return 'Input required';
        }
        return true;
    }
}
module.exports = prompter;