// Constructor Arithmetic is imported.
const Prompter = require('../scripts/prompter.js');

// A testing suite for Arithmetic is created.
describe('Prompter', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('questions', () => {
        it('should be an array of objects, with each object containing a minimum keys type, name, and message', () => {
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }]);
            expect(Array.isArray(prompter.questions)).toBe(true);
            expect('name' in prompter.questions[0] && 'type' in prompter.questions[0] && 'message' in prompter.questions[0]).toBe(true);
        })
    })

    describe('validateInput', () => {
        it('should accept input no longer than 3 characters', () => {
           
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }]);
           // prompter.startPrompt();
            expect(prompter.validateInput('311')).toBe(true);
        });
    });
    

    describe('filterInput', () => {
        it('should return a string with no empty characters at the beginning or end');
        
        const prompter = new Prompter([{
            type: 'input',
            name: 'textColor',
            message: 'Enter your color '.rainbow,
            suffix: '(in hex or by name):'.green,

        }]);
       // prompter.startPrompt();
       let input = prompter.filterInput(' 311 ');
       let zero = input.charAt(0);
       let two = input.charAt(2);
        expect(zero != " " && two != " ").toBe(true);
    });

    

    describe('startPrompt', () => {
        it('should call _startPrompt and pass questions'); 
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,
    
            }]);
            expect(prompter.startPrompt([prompter.questions]) != null).toBe(true);
        
    });
    /*
    
    */

    // A test is created to check that the difference does in fact return the difference between the two numbers.
    /* describe('filterInput', () => {
       it('should take two numbers find the difference', () => {
         const total = 0;
         const arithmetic = new Arithmetic();
         expect(arithmetic.difference(2, 2)).toEqual(total);
       });
     });
   */
});
