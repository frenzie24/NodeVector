const findColorDataByName = require('../scripts/colorFinder');
const colorFinder = require('../scripts/colorFinder');

describe('findColorDataByName', ()=> {
    it('Should take an input string and remove empty space.', ()=> {
        let fcdbm = findColorDataByName(' red ');
        expect(fcdbm).toEqual(findColorDataByName('red'));
    })

    it('Should take an input string and convert all characters to Uppercase.', ()=> {
        let fcdbm = findColorDataByName(' red ');
        expect(fcdbm).toEqual(findColorDataByName('RED'));
    })

    it('Should throw an error if colorData cannot be found from supplied string.', ()=> {
        let fcdbm = () => findColorDataByName(' BREAK IT ');
        let err = new Error ('No data found for BREAKIT.  Try again')
        expect(fcdbm).toThrow(err);
    })
    it('Should return a string when passed a valid hex value or color name', ()=> {
        let fcdbm = findColorDataByName('red');
        expect(typeof fcdbm).toEqual('string');
        
    })
});