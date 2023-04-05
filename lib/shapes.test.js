const { Shape, Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () =>{
    it('should render a triangle', () =>{
        const shape = new Triangle();
        shape.setShapeColor("Blue");
        expect(shape.render()).toEqual('<svg height="300" width="200"><polygon points="0,200 200,300 200,0" style="fill:Blue" /><text x="90" y="175" fill=""></text></svg>');
    }); 
});

describe('Circle', () =>{
    it('should render a triangle', () =>{
        const shape = new Circle();
        shape.setShapeColor("Blue");
        expect(shape.render()).toEqual('<svg height="300" width="200"><circle cx="100" cy="120" r="90" fill="Blue" /><text x="85" y="120" fill=""></text></svg>');
    }); 
});

describe('Square', () =>{
    it('should render a triangle', () =>{
        const shape = new Square();
        shape.setShapeColor("Blue");
        expect(shape.render()).toEqual('<svg height="300" width="200"><rect width="150" height="150" style="fill:Blue" /><text x="55" y="75" fill=""></text></svg>');
    }); 
});