class Stack {
  constructor() {
    this.arr = [];
  }

  pop() {
    if (!this.isEmpty()) {
      return this.arr.pop();
    }

    throw new Error('stack is empty');
  }

  push(val) {
    this.arr.push(val);
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

class Queue {
  constructor() {
    this.oldestStack = new Stack();
    this.newestStack = new Stack(); // seconday stack
  }

  enqueue(val) {
    this.newestStack.push(val);
  }

  dequeue() {
    if (!this.oldestStack.isEmpty()) {
      return this.oldestStack.pop();
    }
    while (!this.newestStack.isEmpty()) {
      this.oldestStack.push(this.newestStack.pop());
    }
    return this.oldestStack.pop();
  }
}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue.dequeue());
console.log(queue.dequeue());
