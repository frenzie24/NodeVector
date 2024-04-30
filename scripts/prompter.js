
let inquirer = require('inquirer');
let logger = require('./logger.js');

let findColorDataByName = require('./colorFinder.js')




async function _startPrompt(questions, handleAnswers) {
    await inquirer.prompt(questions).then(answer => {
       
        handleAnswers(answer);
    });
}

// class prompter requires a questions obj and a callback function when initialized
class Prompter {
    constructor(questions, handleAnswers) {
       
        if(!questions) 
            throw new Error ('Questions for this prompt are undefined');

        if (!Array.isArray(questions)) questions = [questions];
        this.questions = questions;
        this.handleAnswers = handleAnswers;

        // for every question, add validateInput and filterInput to their object
       
        this.questions.map(question => {
            question.validate = question.validate ? question.validate : this.validateInput;
            question.filter = question.filter ? question.filter : this.filterInput;
           
        });
        
     
    }

    startPrompt = () => {
        if(!this.questions) throw  new Error ('Cannot start prompt. Questions for this prompt are undefined');
        _startPrompt(this.questions, this.handleAnswers);
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