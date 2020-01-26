// Hi, here's your problem today. This problem was recently asked by Microsoft:

// You are given two linked-lists representing two non-negative integers. The digits are stored in
//reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const { LinkedList, Node } = require('./linked-list');

function addTwoLinkedList(l1, l2) {
    let temp1 = '';
    let node1 = l1.head;

    while (node1) {
        temp1 = node1.data + temp1;
        node1 = node1.next;
    }

    let temp2 = '';
    let node2 = l2.head;

    while (node2) {
        temp2 = node2.data + temp2;
        node2 = node2.next;
    }

    let values = (parseInt(temp1) + parseInt(temp2))
        .toString()
        .split('')
        .reverse()
        .map(item => parseInt(item));

    return new LinkedList(values);
}

let l1 = new LinkedList([2, 4, 3]);

let l2 = new LinkedList([5, 6, 4]);

let sum = addTwoLinkedList(l1, l2);

console.log(sum);
