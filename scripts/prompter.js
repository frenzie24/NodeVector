
let inquirer = require('inquirer');
let logger = require('./logger.js');

let findColorDataByName = require('./colorFinder.js')





// class prompter requires a questions obj and a callback function when initialized
class Prompter {
    constructor(questions, handleAnswers) {
        if (!handleAnswers){
            throw new Error('handleAnswers for this prompt are undefined.');
        }
        if (!questions)
            throw new Error('Params for this prompt are undefined');
       

        if (!Array.isArray(questions)) questions = [questions];
        this.questions = questions;
        this.handleAnswers = handleAnswers;

        // for every question, add validateInput and filterInput to their object

        this.questions.map(question => {
            question.validate = question.validate ? question.validate : this.validateInput;
            question.filter = question.filter ? question.filter : this.filterInput;

        });


    }

    startPrompt = async () => {
        if (!this.questions) throw new Error('Cannot start prompt. Questions for this prompt are undefined');
        if (!this.handleAnswers) throw new Error('Cannot start prompt. Answer Handling for this prompt is undefined');
        await inquirer.prompt(this.questions).then(answer => {
            this.handleAnswers(answer);
        });
    }

    filterInput(input) {
        return input.trim();
    }
    validateInput(input) {
        if (!input.length) {
            return 'Input required';
        }
        return true;
    }
}
module.exports = Prompter;