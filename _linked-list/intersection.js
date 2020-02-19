const {LinkedList, Node } = require("./_linked-list")

function getSize(l) {
  let count = 0
  let node = l.head;
  while (node) {
    node=node.next 
    count++
  }
  return count
}


function isInterection(l1, l2) {
     let size1= getSize(l1)
     let size2= getSize(l2)

     let short = size1>size2? l2: l1
     let long = size1>size2? l1: l2 

     let shortP = short.head
     let longP = long.head
     let count = Math.abs(size1- size2)
     while(count>0) {
        longP= longP.next
        count--
     }

     while(shortP.next!== null && longP.next !== null) {
          if (shortP.next === longP.next) {
            return true
          }
          shortP =shortP.next
          longP = longP.next 
     }
     return false
}

let  sharedNode = new Node(3, new Node(5))

let l1 = new LinkedList()
let head1 = new Node(4,  new Node(23))
l1.setHead(head1)

let l2 = new LinkedList()
let head2 = new Node(5,  sharedNode)
l2.setHead(head2)

console.log(isInterection(l1,l2))