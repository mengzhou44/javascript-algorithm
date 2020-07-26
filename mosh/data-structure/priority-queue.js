class PriorityQueue {
      constructor(comparator) {
         this.array=[]
         this.comparator = comparator
      }

      enqueue(item) {
         if (this.array.length === 0) {
              this.array.push(item)
         } else  {
                let i
                for(i = this.array.length-1; i>=0; i--) {
                    if (this.comparator(item, this.array[i]) < 0 ) {
                        this.array[i+1] = this.array[i]
                    } else {
                        break
                    }
                }  
                this.array[i+1]= item
         }
      }

      dequeue() {
          if (this.array.length === 0)  throw new Error('queue is empty!')
          return this.array.shift()
      }

      print() {
        console.log(this.array)
      }
}


let queue = new PriorityQueue((a,b)=> a-b )

queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(1)
queue.print()
queue.enqueue(6)
queue.enqueue(2)
queue.enqueue(7)
queue.print()