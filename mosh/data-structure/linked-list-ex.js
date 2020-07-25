class Node {
    constructor(val) {
       this.val = val 
       this.next = null
    }
}

function findMiddle(head) {
     if (head === null)  return []

     if (head.next === null)  return [head.val]
     let p1= head
     let p2= head 

     while(p2.next!=null && p2.next.next!== null) {
        p1=p1.next
        p2=p2.next.next
     }
     if (p2.next === null) return  [p1.val]

     return [p1.val, p1.next.val]
}

function hasLoop(head) {
    if (head ===null || head.next === null)  return false 
    let fast  = head 
    let slow  = head 
    while(fast && fast.next ) {
       fast = fast.next.next
       slow=slow.next 
       if (fast === slow)  return true 
    }
    return false 
}


let head = new Node(10)
head.next = new Node(20)
head.next.next = new Node(30)
head.next.next.next = new Node(40)
console.log(findMiddle(head))
head.next.next.next.next = new Node(50)
console.log(findMiddle(head))
 
console.log(hasLoop(head))

head.next.next.next = head.next
console.log(hasLoop(head))