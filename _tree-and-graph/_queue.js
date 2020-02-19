// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.array = [];
    }

    add(item) {
        this.array.unshift(item);
    }

    remove() {
        return this.array.pop();
    }

    has(item) {
       return this.array.includes(item)
    }

    isEmpty() {
       return this.array.length === 0 
    }
}

module.exports = { Queue };
