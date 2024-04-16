const Circle =require('./circle.js');

describe('Circle', ()=>{
    test('should check to see if the shape properties are inherited', ()=>{
        const circle = new Circle("test","red","green");
        expect(circle.text).toBe('test');
        expect(circle.color).toBe('red');
        expect(circle.shapeColor).toBe('green');
    })
    test('should return the correct string for SVG', () =>{
        const circle = new Circle("test","red","green");
        expect(circle.render()).toBe(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle"  fill="red">test</text>
        
        </svg>`)
    })
})