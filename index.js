let logger = require('./scripts/logger.js');
let {validateInput, filterInput} = require('./scripts/prompter.js')
let findColorDataByName = require('./scripts/colorFinder.js')
let Prompter = require('./scripts/prompter.js')
logger('hello world', 'blue');

let questions = [{
    type: 'input',
    name: 'text',
    message: 'Please Enter 3 Characters'.green,
  
}, {
    type: 'input',
    name: 'textColor',
    message: 'Enter your color '.rainbow,
    suffix: '(in hex or by name):'.green,
    validate: (input) => {
        input.length != 0;
    },
    filter: (input) =>{
        input.trim();
    }

}]

let prompter = new Prompter(questions);
prompter.startPrompt();