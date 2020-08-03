class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `${this.value}`
    }
}

class MinHeap {
    constructor() {
        this.data = []
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
        while (index > 0 && this.data[index].key < this.parent(index).key) {
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
            this.leftChild(index).key < this.data[index].key
        ) {
            return false
        }

        if (
            this.hasRightChild(index) &&
            this.rightChild(index).key < this.data[index].key
        ) {
            return false
        }
        return true
    }

    getSmallerIndex(index) {
        let smallerIndex = index
        if (
            this.hasLeftChild(index) &&
            this.leftChild(index).key < this.data[index].key
        ) {
            smallerIndex = this.leftChildIndex(index)
        }

        if (
            this.hasRightChild(index) &&
            this.rightChild(index).key < this.data[smallerIndex].key
        ) {
            smallerIndex = this.rightChildIndex(index)
        }

        return smallerIndex
    }

    isEmpty() {
       return this.data.length === 0 
    }
}

let heap = new MinHeap()
heap.insert(new Node(10, 'value10'))
heap.insert(new Node(5, 'value5'))
heap.insert(new Node(17, 'value17'))
heap.insert(new Node(4, 'value4'))
heap.insert(new Node(22, 'value22'))
heap.print()

console.log(heap.remove())
heap.print()

class MinPriorityQueue {
    constructor() {
        this.heap = new MinHeap()
    }

    add(key, value) {
        this.heap.insert(new Node(key, value))
    }

    remove() {
       return this.heap.remove()
    }
    
    isEmpty() {
       return this.heap.isEmpty()
    }
}


let queue = new MinPriorityQueue()
queue.add(10, 'value10')
queue.add(5,  'value5')
queue.add(17, 'value17')
queue.add(4,  'value4')
queue.add(22, 'value22')
 
let result = [] 
while(!queue.isEmpty()) {
      result.push(queue.remove().key)
}

console.log(result)