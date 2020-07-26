function reverseFirstKElements(nums, k) {
    if (nums.length < k) {
        throw new Error('No enough elements!')
    }

    let stack = []
    for (let i = 0; i < k; i++) {
        stack.push(nums.shift())
    }
    while (stack.length > 0) {
        nums.unshift(stack.shift())
    }
    return nums
}

let nums = reverseFirstKElements([10, 20, 30, 40, 50], 3)
console.log(nums)

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null
    }

    enqueue(val) {
  
        if (this.head === null) {
         
            this.head = new Node(val)
            return
        }
        let current = this.head
      
        while (current.next) {
            current = current.next
        }
        current.next = new Node(val)
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('queue is empty!')
        let item = this.head.val
        this.head = this.head.next
        return item
    }

    peek() {
        if (this.isEmpty()) throw new Error('queue is empty!')
        return this.head.val
    }

    size() {
        let count = 0
        let current = this.head
        while (current) {
            current = current.next
            count++
        }
        return count
    }

    isEmpty() {
        return this.head === null
    }

    print() {
      let current=this.head
      let array=[]
      while(current) {
         array.push(current.val)
         current = current.next
      }
      console.log(`[${array.join(',')}]`)
    }
}


let queue = new LinkedListQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.print()
console.log(queue.size())
queue.dequeue()
queue.print()



class TwoQueuesStack {

      constructor(){
           this.first= []
           this.second = [] 
      }

      push(val) {
          this.first.push(val)
      }

      pop() {
         if (this.isEmpty()) throw new Error("stack is empty!")
         while(this.first.length>1) {
            this.second.push(this.first.shift())
         }
         let item = this.first.shift()

         this.first = this.second 
         this.second = [] 

         return item 
      }

      peek() {
         if (this.isEmpty()) throw new Error("stack is empty!")
         return this.first[this.first.length-1]
      }

      size() {
          return this.first.length
      }

      isEmpty() {
          return this.first.length === 0 
      }

      print() {
        console.log(`[${this.first.join(',')}]`)
      }

} 

let stack = new TwoQueuesStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()

stack.pop()
stack.print()