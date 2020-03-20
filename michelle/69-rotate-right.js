function rotateRight(head, k) {
    if (head === null || head.next === null) {
        return head
    }
    let count = getListCount(head)

    let num = k % count

    for (let i = 0; i < num; i++) {
        head = rotateRightOneStep(head)
    }

    return head
}

function getListCount(head) {
    let node = head
    let count = 0
    while (node !== null) {
        count = count + 1
        node = node.next
    }

    return count
}

function rotateRightOneStep(head) {
    let first = head
    let currentP = head
    let nextP = head.next

    while (nextP && nextP.next) {
        currentP = nextP
        nextP = nextP.next
    }

    currentP.next = null
    nextP.next = first
    return nextP
}


*******
var rotateRight = function(head, k) {
  
  if (head=== null || head.next === null) {
       return  head
  }
  let count = getListCount(head)
  
  let num =  k % count
  if (num === 0)   return  head
   
  let index = 1
  let node = head
  let tail
  let newHead
 
  while(index<=count) {
  
      if (index === count - num ) {         
           tail = node
           newHead =node.next
      }
      if (index<count) {
           node = node.next
      }
     
      index++
  }
  
  node.next = head

  tail.next = null

  return newHead 
  
  
};

function getListCount(head) {
    let node = head;
    let count=0
    while(node!== null) {
         count= count+1
         node = node.next
    }
  
    return count
}

