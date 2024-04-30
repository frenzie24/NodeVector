// nl is a string literal for a line return
const nl = `
`;

//parent of all shapes
class Shape {
    constructor(color, text, textColor) {
        if(!color || !text || !textColor) {
            throw new Error('Shapes require: color, text, and textColor')
        }
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
        this.svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.textEle = ``;
        this.shapeEle = ``;
    }

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


module.exports = { Square, Circle, Triangle};