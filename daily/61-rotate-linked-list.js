class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function rotateRight(head, k) {
   if (head === null) return null 
    let current = head
    let size = 0
   
    while (current) {
        size++
        current = current.next
    }

    k = k % size
    let fastP = head
    let slowP = head
    let count = 0
    while (count < k) {
        fastP = fastP.next
        count++
    }
    
    while (fastP&& fastP.next) {
        slowP = slowP.next
        fastP = fastP.next   
    }
    
    fastP.next = head
    head = slowP.next
    slowP.next = null
    return head
}

let  listNode = new Node(1)
listNode.next = new Node(2)
listNode.next.next = new Node(3)
listNode.next.next.next = new Node(4)

console.log(rotateRight(listNode, 2))
