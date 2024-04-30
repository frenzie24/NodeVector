// nl is a string literal for a line return
let logger = require('./logger');
const nl = `
`;

//parent of all shapes
class Shape {
    // 
    constructor(color, text, textColor) {
       
        if (!this.checkArg(color) || !this.checkArg(text) || !this.checkArg(textColor))
            throw new Error('Shape parameters must be a 3 defined strings')

        logger('Building your svg!', 'green');
        
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
        this.svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.textEle;
        this.shapeEle;
    }

    checkArg(arg) {
        if (!arg) return false;
        if (typeof arg !== 'string') return false;
        return true;
    }
    // Thanks to inheritance, we only need to define render once
    // Since shape is not available outside of this script, Square, Circle, and Triangle will define textEle and shapeEle
    render() {
        return `${this.svgString}${this.shapeEle}${this.textEle}</svg>`
    }
}

//draws square with text inside
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shapeEle = `<rect width="300" height="200" x="0" y="0"  fill="${color}" />`;
        this.textEle = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" stroke="${this.textColor}" fill="${this.textColor}" font-size="90" >${this.text}</text>`
    }

}

// draws circle with text inside
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shapeEle = `<circle r="35%" cx="50%" cy="50%" fill="${color}" />`
        this.textEle = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" stroke="${this.textColor}" fill="${this.textColor}" font-size="70" >${this.text}</text>`
    }

}

//draws triangle with text inside
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.shapeEle = ` <polygon points="0,200 300,200 150,0" style="fill:${color}" />`
        this.textEle = `<text x="50%" y="66%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="60" stroke="${this.textColor}" >${this.text}</text>`
    }
}


module.exports = { Square, Circle, Triangle };