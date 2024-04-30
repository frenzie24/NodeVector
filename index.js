let logger = require('./scripts/logger.js');
let {validateInput, filterInput} = require('./scripts/prompter.js')
let findColorDataByName = require('./scripts/colorFinder.js')
logger('hello world', 'blue');

let questions = [{
    type: 'input',
    name: 'text',
    message: 'Please Enter 3 Characters'.green,
    validate: (input)=>{
        if (input.length > 3) {
            return '3 Characters maximum please';
        } return true;
    },
    filter: filterInput,
}, {
    type: 'input',
    name: 'textColor',
    message: 'Enter your color '.rainbow,
    suffix: '(in hex or by name):'.green,
    validate: (input)=>{
        let data = findColorDataByName(input);
        if(!data) return 'Enter valid color Hex value or name.'
    
        return true;
    },
    filter: filterInput,
}]