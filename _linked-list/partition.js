const { LinkedList, Node } = require('./_linked-list');

// function partition(l, num) {
//     if (l.head === null || l.head.next === null) {
//         return l;
//     }
//     let node = l.head;
//     let values = [];
//     while (node) {
//         if (node.data >= num) {
//             values.push(node.data);
//         } else {
//             values.unshift(node.data);
//         }
//         node = node.next;
//     }

//     node = l.head;
//     while (node) {
//         node.data = values.shift();
//         node = node.next
//     }
//     return l;
// }

function partition(l, num) {
    if (l.head === null || l.head.next === null) {
        return l;
    }
    let head = null;

    let node = l.head;
    while (node) {
        if (node.data >= num) {
            if (head === null) {
                head = new Node(node.data);
            } else {
                let temp = head;
                while (temp.next) {
                    temp = temp.next;
                }
                temp.next = new Node(node.data);
            }
        } else {
            if (head === null) {
                head = new Node(node.data);
            } else {
                head = new Node(node.data, head)
            }
        }
        node = node.next
    }

    let result = new LinkedList()
    result.setHead(head)
    return result 
}

let l = new LinkedList([3, 5, 8, 5, 10, 2, 1], 5);
let result = partition(l, 5);

result.print();
