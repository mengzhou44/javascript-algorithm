class Stack {
  constructor() {
      this.data = [];
  }
  push(val) {
      this.data.push(val);
  }
  pop() {
     this.data.pop();
  }
  peek() {
      if (this.data.length > 0) {
          return this.data[this.data.length - 1];
      }
      return  null
  }
  isEmpty() {
     return this.data.length ===0 
  }
}

class MinStack {
  constructor() {
      this.data = new Stack();
      this.min = new Stack();
  }
  push(val) {
    
     if (this.min.isEmpty() || this.min.peek()>=val) {
        this.min.push(val)
     }
     this.data.push(val)
  }
  pop() {
    
    if (this.min.peek()=== this.data.peek()) {
       this.min.pop()
    }
    this.data.pop()
  }
  
  top() {
     return this.data.peek();
  }
  getMin() {
    return this.min.peek();
  }
}
