class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addFirst(val) {
        if (this.head === null) {
            this.head = new Node(val)
        } else {
            let node = new Node(val)
            node.next = this.head
            this.head = node
        }
    }

    addLast(val) {
        if (this.head === null) {
            this.head = new Node(val)
        } else {
            let p = this.head
            while (p.next) {
                p = p.next
            }
            p.next = new Node(val)
        }
    }

    deleteFirst() {
        if (this.head === null) {
            return
        }
        this.head = this.head.next
    }

    deleteLast() {
        if (this.head === null) {
            return
        }
        if (this.head.next === null) {
            this.head = null
            return 
        }

        let p = this.head
        let prev= null
        while (p.next) {
            prev= p
            p = p.next
        }
        prev.next = null
        
    }

    contains(val) {
        let cur = this.head
        while (cur) {
            if (cur.val === val) return true
            cur = cur.next
        }
        return false
    }

    indexOf(val) {
        let index = 0
        let cur = this.head
        while (cur) {
            if (cur.val === val) return index
            cur = cur.next
            index++
        }
        return -1
    }

    size() {
         let size = 0 
         let cur = this.head
         while(cur) {
             cur = cur.next
             size++
         }
         return size 
    }

    toArray() {
         let result =[] 
         let cur = this.head 
         while(cur) {
            result.push(cur.val)
            cur = cur.next
         }
         return result 
    }

    reverse() {
        let cur = this.head 
        let prev = null
        while(cur) {
             let next = cur.next 
             cur.next = prev
             prev = cur
             cur = next
        }
        return prev
    }

    last() {
        if (this.head === null) return this.head
        
        let current = this.head
        let prev = null 
        while(current!==null) {
            prev = current 
            current =  current.next
        }
        return prev
    }


    kthNodeFromEnd(k) {
        let p1 = this.head 
        let p2 = this.head 
        let count = 0 
        while(count<k-1) {
             p1 = p1.next
             count++
        }

        let last = this.last()
        console.log(last)
        while(p1!== last) {
            p1 = p1.next 
            p2 = p2.next 
        }
        return p2
    }
}



let list = new LinkedList()
 
list.addLast(2)
list.addLast(3)
list.addLast(4)
list.addFirst(1)

console.log(list.head)
console.log(list.contains(4))
console.log(list.indexOf(3))

list.deleteLast()
console.log(list.head)
console.log(list.size())
console.log(list.toArray())
// console.log(list.reverse())
  console.log(list.kthNodeFromEnd(0))