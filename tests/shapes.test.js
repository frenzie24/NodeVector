const Shapes = require('../scripts/shapes.js')
const Circle = Shapes.Circle;
const Square = Shapes.Square;
const Triangle = Shapes.Triangle;

describe('Shape', () => {
    it('should throw an error if any parameters in the constructor are undefined', () => {
        let shape = () => new Circle();
        let error = new Error('Shapes require: color, text, and textColor');
        expect(shape).toThrow(error);
    });

    it('should return a string when render() is called', () => {
        let shape = new Circle('green', 'KCG', 'yellow');
        let renderString = shape.render();
        expect(typeof renderString).toBe('string');
    })
});

