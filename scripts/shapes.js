
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color,  text, textColor) ;
        this.x = 55;
        this.y = 10;
        this.rWidth = 190;
        this.rHeight = 190;

    }
}

class Cirlce extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.cx = "150";
        this.cy="100";
        this.r='95';
        
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.points="10,190 280,190 150,10" 
    }
}

class Shape {
    constructor(color, text, textColor) {
        this.fill = color;
        this.text = text;
        this.textColor = textColor;
        this.width = 300;
        this.height = 200;
    }

    drawShape () {

    }
}