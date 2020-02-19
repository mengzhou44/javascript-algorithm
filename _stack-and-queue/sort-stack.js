const { Stack } = require('./_stack');

class SortStack {
    constructor() {
        this.primaryStack = new Stack();
        this.secondaryStack = new Stack();
    }

    push(value) {
        if (this.primaryStack.isEmpty()) {
            this.primaryStack.push(value);
        } else {
            while (
                !this.primaryStack.isEmpty() &&
                this.primaryStack.peek() < value
            ) {
                this.secondaryStack.push(this.primaryStack.pop());
            }
            this.primaryStack.push(value);

            while (!this.secondaryStack.isEmpty()) {
                this.primaryStack.push(this.secondaryStack.pop());
            }
        }
    }
    pop() {
        return this.primaryStack.pop();
    }

    peek() {
        return this.primaryStack.peek();
    }

    isEmpty() {
        return this.primaryStack.isEmpty();
    }
}

let stack = new SortStack();

stack.push(8);
stack.push(12);
stack.push(4);
stack.push(7);

console.log(stack.peek()); //4
stack.pop();
console.log(stack.peek()); //7
stack.pop();
console.log(stack.peek()); //8
