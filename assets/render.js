const  {Triangle, Rectangle, Circle }= require('./shape');

describe('Validate', () => {
    describe('Make Shape', ()=> {
      it("returns svg triangle when prompted", ()=>{
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
      it("returns svg rectangle when prompted", ()=>{
        const shape = new Rectangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="50,50 250,50 250,150 50,150" fill="blue" />');
      });
      it("returns svg circle when prompted", ()=>{
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
      })
    })
  })