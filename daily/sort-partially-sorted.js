class MinHeap {
    constructor() {
        this.data = []
    }

    insert(val) {
        this.data.push(val)
        this.bubbleUp()
    }

    isEmpty() {
        return this.data.length === 0
    }

    remove() {
        if (this.isEmpty()) throw new Error('heap is empty')
        const root = this.data[0]
        const last = this.data.pop()
        if (this.data.length > 0) {
            this.data[0] = last
            this.bubbleDown()
        }
        return root
    }

    bubbleDown() {
        let index = 0
        while (index < this.data.length && !this.isValidParent(index)) {
            let childIndex = this.smallerChildIndex(index)
            this.swap(childIndex, index)
            index = childIndex
        }
    }

    isValidParent(index) {
        if (!this.hasLeftChild(index)) return true

        if (!this.hasRightChild(index))
            return this.data[index] <= this.leftChild(index)

        return (
            this.data[index] <= this.leftChild(index) &&
            this.data[index] <= this.rightChild(index)
        )
    }

    smallerChildIndex(index) {
        if (!this.hasLeftChild(index)) {
            return index
        }

        if (!this.hasRightChild(index)) {
            return this.leftChildIndex(index)
        }

        if (this.leftChild(index) < this.rightChild(index)) {
            return this.leftChildIndex(index)
        }
        return this.rightChildIndex(index)
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.data.length
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) < this.data.length
    }

    leftChild(index) {
        return this.data[this.leftChildIndex(index)]
    }

    rightChild(index) {
        return this.data[this.rightChildIndex(index)]
    }

    leftChildIndex(index) {
        return index * 2 + 1
    }

    rightChildIndex(index) {
        return index * 2 + 2
    }

    bubbleUp() {
        let index = this.data.length - 1
        while (index > 0 && this.data[index] < this.data[this.parent(index)]) {
            this.swap(this.parent(index), index)
            index = this.parent(index)
        }
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    swap(i, j) {
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }
}

function sortPartiallySorted(nums, k) {
    let result = []
    let heap = new MinHeap()
    for (let i = 0; i < k; i++) {
        heap.insert(nums.shift())
    }
    
    while (nums.length > 0) {
        heap.insert(nums.shift())
        result.push(heap.remove())
    }
    while (!heap.isEmpty()) {
        result.push(heap.remove())
    }
    return result
}

console.log(sortPartiallySorted([3, 2, 6, 5, 4], 2))
