class Heap {
    constructor() {
        this.data = []
    }

    insert(val) {
        this.data.push(val)
        this.bubbleUp()
    }

    remove() {
        if (this.data.length === 0) return
        let val = this.data[0]
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.bubbleDown()
        return val
    }

    bubbleDown() {
        let index = 0
        while (index < this.data.length && !this.isValidParent(index)) {
            let largerChildIndex = this.getLargerChildIndex(index)
            this.swap(largerChildIndex, index)
            index = largerChildIndex
        }
    }

    getLargerChildIndex(index) {
        if (!this.hasLeftChild(index)) return index

        if (!this.hasRightChild(index)) return this.leftChildIndex(index)

        if (this.leftChild(index) > this.rightChild(index))
            return this.leftChildIndex(index)

        return this.rightChildIndex(index)
    }

    isValidParent(index) {
        if (!this.hasLeftChild(index)) {
            return true
        }

        if (!this.hasRightChild(index)) {
            return this.data[index] > this.leftChild(index)
        }

        return (
            this.data[index] > this.leftChild(index) &&
            this.data[index] > this.rightChild(index)
        )
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.data.length
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) < this.data.length
    }

    leftChildIndex(index) {
        return 2 * index + 1
    }

    rightChildIndex(index) {
        return 2 * index + 2
    }

    leftChild(index) {
        return this.data[this.leftChildIndex(index)]
    }

    rightChild(index) {
        return this.data[this.rightChildIndex(index)]
    }

    bubbleUp() {
        let index = this.data.length - 1
        while (index > 0 && this.data[this.parent(index)] < this.data[index]) {
            this.swap(this.parent(index), index)
            index = this.parent(index)
        }
    }

    swap(index1, index2) {
        let temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    isEmpty() {
        return this.data.length === 0
    }

    print() {
        console.log(`[${this.data.join(',')}]`)
    }
}

module.exports = Heap

// let array= [5,3,10,1,4,2]
// let heap = new Heap()
// heap.insert(10)
// heap.insert(5)
// heap.insert(17)
// heap.insert(4)
// heap.insert(22)

// let removed = heap.remove()
// heap.print()
