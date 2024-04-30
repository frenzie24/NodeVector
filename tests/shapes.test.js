const Shapes = require('../scripts/shapes.js')
const Circle = Shapes.Circle;
const Square = Shapes.Square;
const Triangle = Shapes.Triangle;

// a testing suite for shape.js
describe('Shape', () => {
    // series of tests for shape constructor
    it('should throw an error if passed color is undefined', () => {
        let shape = () => new Circle(undefined, 'oh boy!', '#000000');
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });

    it('should throw an error if passed color is not a string', () => {
        let shape = () => new Circle(()=>{}, 'oh boy!', '#000000');
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });

    it('should throw an error if passed text is undefined', () => {
        let shape = () => new Circle('#000000', undefined, '#ffffff');
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });
    
    it('should throw an error if passed text is not a string', () => {
        let shape = () => new Circle('#ffffff', ()=>{}, '#000000');
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });

    it('should throw an error if passed textColor is undefined', () => {
        let shape = () => new Circle('#000000', 'oh boy!', undefined);
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });
    
    it('should throw an error if passed textColor is not a string', () => {
        let shape = () => new Circle('#ffffff', 'oh boy!', ()=>{});
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });
    // tests checkArg function to ensure it returns false if necessary
    describe('checkArg', ()=>{
        it('should return false if arg is undefined', () => {
            let shape = new Square('green', 'KCG', 'yellow');
            expect(shape.checkArg(undefined)).toBeFalsey;
        });

        it('should return false if arg is a string', () => {
            let shape = new Square('green', 'KCG', 'yellow');
            expect(shape.checkArg(()=>{})).toBeFalsey;
        });
    })
    // test that every shape render function returns a string
    describe('render', ()=> {
        it('should return a string', () => {
            let shape = new Triangle('green', 'KCG', 'yellow');
            let renderString = shape.render();
            expect(typeof renderString).toBe('string');
        })
    })
});

