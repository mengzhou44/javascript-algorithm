class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `${this.value}`
    }
}

class Heap {
    constructor(smallerThan) {
        this.data = []
        this.smallerThan = smallerThan
    }

    insert(node) {
        if (this.data.length === 0) {
            this.data.push(node)
            return
        }
        this.data.push(node)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.data.length - 1
        while (
            index > 0 &&
            this.smallerThan(this.data[index], this.parent(index))
        ) {
            this.swap(index, this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }

    parent(index) {
        return this.data[this.parentIndex(index)]
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    swap(first, second) {
        let temp = this.data[first]
        this.data[first] = this.data[second]
        this.data[second] = temp
    }
    print() {
        console.log(`[${this.data.join(', ')}]`)
    }

    remove() {
        if (this.data.length === 0) throw 'heap is empty!'
        if (this.data.length === 1) return this.data.pop()
        const result = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.bubbleDown()
        return result
    }

    bubbleDown() {
        let index = 0
        while (index < this.data.length && !this.isParentValid(index)) {
            let smallerIndex = this.getSmallerIndex(index)
            this.swap(smallerIndex, index)
            index = smallerIndex
        }
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.data.length
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) < this.data.length
    }

    leftChild(index) {
        return this.data[2 * index + 1]
    }

    rightChild(index) {
        return this.data[2 * index + 2]
    }

    leftChildIndex(index) {
        return 2 * index + 1
    }

    rightChildIndex(index) {
        return 2 * index + 2
    }

    isParentValid(index) {
        if (
            this.hasLeftChild(index) &&
            !this.smallerThan(this.data[index], this.leftChild(index))
        ) {
            return false
        }

        if (
            this.hasRightChild(index) &&
            !this.smallerThan(this.data[index], this.rightChild(index))
        ) {
            return false
        }
        return true
    }

    getSmallerIndex(index) {
        let smallerIndex = index
        if (
            this.hasLeftChild(index) &&
            !this.smallerThan(this.data[index], this.leftChild(index))
        ) {
            smallerIndex = this.leftChildIndex(index)
        }

        if (
            this.hasRightChild(index) &&
            !this.smallerThan(this.data[smallerIndex], this.rightChild(index))
        ) {
            smallerIndex = this.rightChildIndex(index)
        }

        return smallerIndex
    }

    isEmpty() {
        return this.data.length === 0
    }
}

class PriorityQueue1 {
    constructor(smallerThan) {
        this.heap = new Heap(smallerThan)
    }

    enqueue(item) {
        this.heap.insert(item)
    }

    dequeue() {
        return this.heap.remove()
    }

    addAll(items) {
        for (let item of items) {
            this.enqueue(item)
        }
    }

    isEmpty() {
        return this.heap.isEmpty()
    }
}

module.exports = PriorityQueue1

let array = [23, 15, 2, 4, 27, 8]
let queue = new PriorityQueue1((a, b) => a < b)
for (let item of array) {
    queue.enqueue(item)
}

let sorted = []
while (!queue.isEmpty()) {
    sorted.push(queue.dequeue())
}
console.log(sorted)
