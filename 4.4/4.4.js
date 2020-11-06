//Question 1:
//What does ref return and why?

//Answer: It returns as an error because the value of this is undefined, it is called as a function not a method with .syntax.

//Question 2:
//Make a calculator

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    div() {
      return this.a / this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  alert( calculator.div() );//i know this wasn't part of the question but added a division part to reinforce i understand what i'm looking at.

  //Question 3:
  //Modify the code of up, down and showStep to make the calls chainable.

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  }
  
  ladder.up().up().down().up().down().showStep();