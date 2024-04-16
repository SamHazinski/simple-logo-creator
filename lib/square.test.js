const Square =require('./square.js');

describe('Square', ()=>{
    test('should check to see if the shape properties are inherited', ()=>{
        const square = new Square("test","red","green");
        expect(square.text).toBe('test');
        expect(square.color).toBe('red');
        expect(square.shapeColor).toBe('green');
    })
    test('should return the correct string for SVG', () =>{
        const square = new Square("test","red","green");
        expect(square.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        
        <rect width="100%" height="100%" fill="green" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle"  fill="red">test</text>
        
        </svg>`)
    })
})