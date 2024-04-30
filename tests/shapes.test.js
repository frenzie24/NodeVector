const Shapes = require('../scripts/shapes.js')
const Circle = Shapes.Circle;
const Square = Shapes.Square;
const Triangle = Shapes.Triangle;

describe('Shape', () => {
    it('should throw an error if any parameters in the constructor are undefined or not a string', () => {
        let shape = () => new Circle();
        let error = new Error('Shape parameters must be a 3 defined strings');
        expect(shape).toThrow(error);
    });

    describe('checkArg', ()=>{
        it('should return false if arg is undefined or not a string', () => {
            let shape = new Square('green', 'KCG', 'yellow');
            expect(shape.checkArg(undefined)).toBeFalsey;
            expect(shape.checkArg(1)).toBeFalsey;
        });
    })

    describe('render', ()=> {
        it('should return a string', () => {
            let shape = new Triangle('green', 'KCG', 'yellow');
            let renderString = shape.render();
            expect(typeof renderString).toBe('string');
        })
    })
});

