class Stack {
    
  constructor() {
     this.data=[];
  }

  add(item) {
    this.data.push(item)
  }

  remove() {
    return this.data.pop()
  }

  has(item) {
    return this.data.includes(item)
  }  

  isEmpty() {
    return this.array.length === 0 
  }
}

 
module.exports = {Stack}
