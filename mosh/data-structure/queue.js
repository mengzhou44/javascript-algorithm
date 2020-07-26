class ArrayQueue {
    constructor(capacity) {
        this.array = new Array(capacity).fill(0)
        this.front = 0
        this.rear = 0
        this.capacity = capacity
        this.count = 0
    }

    enqueue(val) {
        if (this.count === this.capacity) {
            throw 'queue is full!'
        }
        this.array[this.rear] = val
        this.rear++
        this.count++
    }

    dequeue() {
        if (this.count === 0) {
            throw 'queue is  empty!'
        }
        let item = this.array[this.front]
        this.array[this.front] = 0
        this.front++
        this.count--
        return item
    }

    print() {
        console.log(this.array)
    }
}

let queue = new ArrayQueue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()

const item = queue.dequeue()
console.log(item)
queue.print()

class StackQueue {
    constructor() {
        this.first = []
        this.second = []
    }

    enqueue(val) {
        this.first.push(val)
    }

    dequeue() {
        if (this.first.length === 0) throw new Error('queue is empty!')
        while (this.first.length !== 0) {
            this.second.push(this.first.pop())
        }
        let item = this.second.pop()
        while (this.second.length !== 0) {
            this.first.push(this.second.pop())
        }
        return item
    }

    print() {
        console.log(this.first)
    }
}


let queue1 = new StackQueue()
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.enqueue(4)
queue1.print()

const item1 = queue1.dequeue()
console.log(item1)
queue1.print()