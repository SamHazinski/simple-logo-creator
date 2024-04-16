const Triangle =require('./triangle.js');

describe('Triangle', ()=>{
    test('should check to see if the shape properties are inherited', ()=>{
        const triangle = new Triangle("test","red","green");
        expect(triangle.text).toBe('test');
        expect(triangle.color).toBe('red');
        expect(triangle.shapeColor).toBe('green');
    })
})