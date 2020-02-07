const { Stack } = require('./_stack')

class MyQueue {
   constructor() {
      this.primaryStack= new Stack()
      this.secondaryStack= new Stack()
   }

   add(value) {
      while(!this.primaryStack.isEmpty()) {
          this.secondaryStack.push(this.primaryStack.pop())
      }
      this.primaryStack.push(value)

      while(!this.secondaryStack.isEmpty()) {
        this.primaryStack.push(this.secondaryStack.pop())
      }
   
   }

   remove() {
       return this.primaryStack.pop()
   }

   peek() {
      return  this.primaryStack.peek()
   }
}


let queue  = new MyQueue()
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)

console.log(queue.peek())   //1
queue.remove()
console.log(queue.peek())   //2
