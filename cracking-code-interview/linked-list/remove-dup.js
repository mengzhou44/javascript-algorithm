const { LinkedList } = require('./_linked-list');

// function removeDup(l) {

//   if (l.head === null || l.head.next === null) {
//      return l
//   }

//   let map =[]
//   let  previous= null
//   let node = l.head

//    while(node) {
//         if (map.includes(node.data)=== true) {
//              previous.next = node.next;

//         } else {
//              map.push(node.data)
//              previous = node
//         }
//         node = node.next
//    }

//    return l;
// }

function removeDup(l) {
    if (l.head === null || l.head.next === null) {
        return l;
    }

    let node = l.head;

    while (node) {
       let previous = node;
       let fastP = node.next;
        while (fastP) {
            if (fastP.data !== node.data) {
                previous = fastP;
                fastP = fastP.next;
            } else {
                previous.next = fastP.next;
                fastP = fastP.next;
            }
        }
        node = node.next
    }
     
    return l;
}

let l = new LinkedList([1, 2, 3, 6, 6,4, 3, 5, 1]);

const result = removeDup(l);
result.print();
