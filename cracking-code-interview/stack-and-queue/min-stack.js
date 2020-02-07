const {Stack } = require("./_stack")

class MinStack{
   
  
   constructor() {
      this.stack = new Stack()
      this.minValues = new Stack()
   }

   push(value) {    
        if (this.min()=== null || this.min()> value) {
          this.minValues.push(value)
        } 
        this.stack.push(value)
   }

   pop() {
      let value = this.stack.pop()
      if (value!== null && value === this.min()) {
           this.minValues.pop()
      }
   }

   isEmpty() {
       return  this.stack.isEmpty()
   }

   peek() {
      return this.stack.peek()
   }

   min() {
      return this.minValues.peek()
   }

}


let m= new MinStack()
m.push(4)
m.push(5)
m.push(-2)
m.push(8)
console.log(m.min())

m.pop()
m.pop()
console.log(m.min())
