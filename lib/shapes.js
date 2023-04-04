const questions = require('./questions');

class Shape {
    constructor() {
        this.textColor = '';
        this.shapeColor = '';
        this.textCharacters = '';
    }

    setTextColor(color) {
        this.textColor = color;
    }
    setShapeColor(color) {
        this.shapeColor = color;
    }
    setTextCharacters(characters) {
        this.textCharacters = characters;
    }

};

class Triangle extends Shape {
    render () {
        return `<svg height="300" width="200">
        <polygon points="0,200 200,300 200,0" style="fill:${this.shapeColor}" />
        <text x="90" y="175" fill="${this.textColor}">${this.textCharacters}</text>
        </svg>`
    }
};

class Circle extends Shape {
    render () {
        return `<svg height="300" width="200">
        <circle cx="100" cy="120" r="90" fill="${this.shapeColor}" />
        <text x="85" y="120" fill="${this.textColor}">${this.textCharacters}</text>
        </svg>`
    }
};

class Square extends Shape {
    render () {
        return `<svg height="300" width="200">
        <rect width="150" height="150" style="fill:${this.shapeColor}" />
        <text x="55" y="75" fill="${this.textColor}">${this.textCharacters}</text>
        </svg>`
    }
};

module.exports = { Shape, Triangle, Circle, Square };