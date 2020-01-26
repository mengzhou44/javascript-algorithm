const { LinkedList } = require('./_linked-list');

// function isPalindrome(l) {
//     if (l.head === null || l.head.next === null) {
//         return true;
//     }
//     let values = [];
//     let node = l.head;
//     while (node) {
//         values.push(node.data);
//         node = node.next;
//     }

//     let middle = Math.floor(values.length / 2);

//     for (let i = 0; i < middle; i++) {
//         if (values[i] !== values[values.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// function isPalindrome(l) {
//     if (l.head === null || l.head.next === null) {
//         return true;
//     }

//     let slowP = l.head;
//     let fastP = l.head;
//     let arr=[ ]
//     while (fastP.next!== null && fastP.next.next !== null) {
//          fastP = fastP.next.next
//          arr.push(slowP.data)
//          slowP = slowP.next
//     }
//     slowP= slowP.next
//     if (fastP.next !== null)  {
//        slowP = slowP.next
//     }

//     while(slowP) {
//        if (arr.pop()!== slowP.data) {
//           return false
//        }
//        slowP = slowP.next
//     }

//     return true

// }

function isPalindrome(l) {
    if (l.head === null || l.head.next === null) {
        return true;
    }

    let size = getSize(l);

    return  isParlindromeRecursive(l, size)
}

function isParlindromeRecursive(l, size) {
    if (size === 0|| size === 1) {
       return true 
    }
    let head = l.head 
    let tail = removeLastNode(l)
    if (head.data!== tail.data) return false
    l.head = l.head.next;

    return  isParlindromeRecursive(l, size-2)
}

function removeLastNode(l) {
     if (l.head === null || l.head.next === null) {
         return l.head
     }
     let node = l.head
     let prev=null; 
     while(node.next) {
          prev= node;
          node = node.next
     }
     
     prev.next = null
     return node 
}



function getSize(l) {
    let count = 0
    let node = l.head;
    while (node) {
      node=node.next 
      count++
    }
    return count
}

let l = new LinkedList([1, 2, 4, 2, 1]);

let result = isPalindrome(l);

console.log(result);
