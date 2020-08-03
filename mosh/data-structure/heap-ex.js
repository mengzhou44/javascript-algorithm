const Heap = require('./heap')

let heap = new Heap()
heap.insert(5)
heap.insert(3)
heap.insert(10)
heap.insert(1)
heap.insert(4)
heap.insert(2)

let result = []
while (!heap.isEmpty()) {
    result.unshift(heap.remove())
}
console.log(result)

class PriorityQueue {
    constructor() {
        this.heap = new Heap()
    }

    enqueue(val) {
        this.heap.insert(val)
    }

    dequeue() {
        return this.heap.remove()
    }
    isEmpty() {
        return this.heap.isEmpty()
    }
}


module.exports= PriorityQueue

function heapify(nums, index) {
    let largerIndex = index
    let leftIndex = 2 * index + 1
    if (leftIndex < nums.length && nums[leftIndex] > nums[largerIndex]) {
        largerIndex = leftIndex
    }

    let rightIndex = 2 * index + 2
    if (rightIndex < nums.length && nums[rightIndex] > nums[largerIndex]) {
        largerIndex = rightIndex
    }

    if (index === largerIndex) return
    swap(index, largerIndex)
    heapify(nums, largerIndex)

    function swap(first, second) {
        let temp = nums[first]
        nums[first] = nums[second]
        nums[second] = temp
    }
}

let nums = [5, 3, 8, 4, 1, 2]

for(let i=nums.length/2-1; i>=0; i--) {
    heapify(nums, i)
}
console.log(nums)

function getKthLargest(nums, k) {
    if (k<1 || k> nums.length) throw 'Invalid K'
     let heap = new Heap()
     nums.forEach(num=> heap.insert(num))
     let result 
     for(let i=0; i<k; i++) {
         result = heap.remove()
     }
    return result 
}

console.log(getKthLargest([5,3,8,4,1,2],2))
