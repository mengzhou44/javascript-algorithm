// Hi, here's your problem today. This problem was recently asked by Google:

// Given a singly-linked list, reverse the list. This can be done
//iteratively or recursively. Can you get both solutions?

// Example:
// Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
// Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL

const { LinkedList } = require('./linked-list');

// function reverse(l) {

//     let prev = null;
//     let curr = l.head;
//     let next = null;

//     while (curr != null) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }

//     let result = new LinkedList();
//     result.setHead(prev)
//     return result;
// }

function reverse(node) {
    if (node === null || node.next === null) {
        return node;
    }

    const p = reverse(node.next);
    p.next = node;
    node.next.next  = node
    return p
}

const l = new LinkedList([4, 3, 2, 1, 0]);

const reversed = reverse(l.head);

console.log(reversed);
