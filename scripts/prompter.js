
let inquirer = require('inquirer');


// filterInput is used in every prompt

// class 
async function Prompter(questions) {
    this.questions = questions;

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