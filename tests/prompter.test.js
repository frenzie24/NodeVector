// Constructor Arithmetic is imported.
const Prompter = require('../scripts/prompter.js');

// A testing suite for prompter is created.
describe('Prompter', () => {
    // a test is craeted to ensure handleanswers is not undefined

    describe('checkArg', () => {
        it('should return false if arg is undefined', () => {
            const pt = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect(pt.checkArg(undefined)).toBeFalsey;
        });
        it('should return false if arg is not a string', () => {
            const pt = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect(pt.checkArg(1)).toBeFalsey;
        })
        it('should return true if arg is a string',()=>{
            const pt = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect(pt.checkArg('Hi!')).toBe(true);
        })
    })
    describe('handleAnswers', () => {
        it('should throw an error if undefined', () => {
            const pt = () => new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], undefined);
            let error = new Error('handleAnswers for this prompt are undefined.');
            expect(pt).toThrow(error)
        });
    })

    // A test is created to ensure questions is valid for work
    describe('questions', () => {
        // test to ensure questions is an array
        it('should be an array of objects', () => {
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect(Array.isArray(prompter.questions)).toBe(true);

        });
        // test to ensure an undefined questions [] will result in an error thrown
        it('should throw an error if passed questions are undefined.', () => {
            const pt = () => new Prompter(undefined, () => { });
            let error = new Error('Params for this prompt are undefined')
            expect(pt).toThrow(error);

        })
        // text to ensure critical key value pairs exist
        it('each object must contain the type key', () => {
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect('type' in prompter.questions[0]).toBe(true);
        })
        it('each object must contain the name key', () => {
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect('name' in prompter.questions[0]).toBe(true);
        })
        it('each object must contain the message key', () => {
            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect('message' in prompter.questions[0]).toBe(true);
        })
        // test to ensure improper question object cause an error to throw
        it('should throw an error when an object in questions[] has undefined assigned to the name key', () => {
            const pt = () => new Prompter([{
                name: undefined,
                message: 'messages',
                type: 'input',
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        });
        it('should throw an error when an object in questions[] has invalid values assigned to the name key', () => {
            const pt = () => new Prompter([{
                name: { 'firstname': 'woops!' },
                message: 'messages',
                type: 'input',
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        });
        it('should throw an error when an object in questions[] has undefined assigned to the message key', () => {
            const pt = () => new Prompter([{
                name: 'newPrompt',
                message: undefined,
                type: 'input',
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        });
        it('should throw an error when an object in questions[] has invalid values assigned to the message key', () => {
            const pt = () => new Prompter([{
                name: 'newPrompt',
                message: ()=>{},
                type: 'input',
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        }); 
        it('should throw an error when an object in questions[] has undefined assigned to the type key', () => {
            const pt = () => new Prompter([{
                name: 'newPrompt',
                message: 'messages',
                type: undefined,
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        });
        it('should throw an error when an object in questions[] has invalid values assigned to the type key', () => {
            const pt = () => new Prompter([{
                name:'newPrompt',
                message: 'messages',
                type: ()=>{},
            }], () => { });
            let error = new Error('Name, type, and message properties of all questions must be defined as strings.')

            expect(pt).toThrow(error);

        });

    })

    // test for the default validate callback 
    describe('validateInput', () => {
        it('should verify input has been entered', () => {

            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            expect(prompter.validateInput('1')).toBe(true);
        });
    });

    // test for the default filter callback 
    describe('filterInput', () => {
        it('should return a string with no empty characters at the beginning or end', () => {

            const prompter = new Prompter([{
                type: 'input',
                name: 'textColor',
                message: 'Enter your color '.rainbow,
                suffix: '(in hex or by name):'.green,

            }], () => { });
            let input = prompter.filterInput(' 311 ');
            let zero = input.charAt(0);
            let two = input.charAt(2);
            expect(zero != " " && two != " ").toBe(true);
        });
    });



});
