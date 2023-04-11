const  {Triangle, Rectangle, Circle }= require('./shape.js');

describe('Validation', () => {
    
describe('Creates Logo', ()=> {
    it("Triangle Return On Prompt", ()=>{
        const shape = new Triangle();
        shape.setColor("");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    it("Rectangle Return On Prompt", ()=>{
        const shape = new Rectangle();
        shape.setColor("");
        expect(shape.render()).toEqual('<polygon points="50,50 250,50 250,150 50,150" fill="blue" />');
      });
    it("Circle Return On Prompt", ()=>{
        const shape = new Circle();
        shape.setColor("");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
      })
    })
  })