const { Stack } = require('./_stack');

class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [new Stack()];
    }
    getCurrentStack() {
        return this.stacks[this.stacks.length - 1];
    }

    push(value) {
        let currentStack = this.getCurrentStack();
        if (currentStack.size() === this.capacity) {
            this.stacks.push(new Stack());
        }
        currentStack = this.getCurrentStack();
        currentStack.push(value)
    }

    pop() {
        let currentStack = this.getCurrentStack();
        let result = currentStack.pop();
        if (currentStack.isEmpty()) {
            this.stacks.pop();
        }
        return result;
    }

    peek() {
        let currentStack = this.getCurrentStack();
        return currentStack.peek();
    }

    isEmpty() {
        return this.stacks[0].isEmpty;
    }
}


let set = new   SetOfStacks(2)
set.push(5)
set.push(12)
set.push(2)
set.push(5)
set.push(7)

console.log(set.peek())  //7 

set.pop()
set.pop()
console.log(set.peek())   // 2 

set.pop()
console.log(set.peek())   // 12 

set.pop()
console.log(set.peek())   // 5
