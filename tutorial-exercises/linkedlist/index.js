// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      const node = new Node(data, this.head);
      this.head = node;
    }
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return  count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (this.head === null) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }


  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head === null) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node.next.next) {
      node = node.next;
    }
    node.next = null;
  }

 
  insertLast(value) {
    let node = this.getLast();
    if (node === null) {
      this.head = new Node(value);
      return;
    }
    node.next = new Node(value);
  }

  getAt(index) {
    if (this.head === null) {
      return null;
    }

    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node === null) {
        return null;
      }
      node = node.next;
    }
    return node;
  }

  removeAt(index) {
    if (this.head === null) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let node = this.getAt(index - 1);
    if (node !== null && node.next !== null) {
      node.next = node.next.next;
    }
  }

  insertAt(value, index) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }

    let node = this.getAt(index - 1);
    if (node !== null) {
      node.next = new Node(value, node.next);
    } else {
      this.insertLast(value);
    }
  }

  forEach(fn) {
    if (this.head === null) {
      return;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
     
    let node = this.head;
    while (node) {
        yield node; 
        node= node.next
    }
  }
}

module.exports = { Node, LinkedList };

 