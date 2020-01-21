class Stack {
    constructor() {
        this.data = [];
    }
    push(val) {
        this.data.push(val);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        if (this.data.length > 0) {
            return this.data[this.data.length - 1];
        }
        return null;
    }
    isEmpty() {
        return this.data.length === 0;
    }
}

var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;

    let stack = new Stack();
    let slowP = head;
    let fastP = head;

    while (fastP && fastP.next) {
        stack.push(slowP.val);
        slowP = slowP.next;
        fastP = fastP.next.next;
    }
    if (fastP !== null) {
        slowP = slowP.next;
    }

    while (slowP != null) {
        if (slowP.val !== stack.pop()) {
            return false;
        }
        slowP = slowP.next;
    }

    return true;
};
