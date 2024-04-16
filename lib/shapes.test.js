const Shape =require('./shapes.js');

describe('Shape', () => {
    test('should check to see if shapes properties are passed', ()=>{
        const shape = new Shape("test","red","green");
        expect(shape.text).toBe('test');
        expect(shape.color).toBe('red');
        expect(shape.shapeColor).toBe('green');
    })
})