// <circle cx="25" cy="75" r="20"/>
// <rect x="10" y="10" width="30" height="30"/>

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
        this.textShape = color;
    }
    setTextCharacters(characters) {
        this.textCharacters = characters;
    }

}

class Triangle extends Shape {
    render () {

    }
}

class Circle extends Shape {
    render () {
        
    }
}

class Square extends Shape {
    render () {
        
    }
}

module.exports = {Shape, Triangle, Circle, Square};