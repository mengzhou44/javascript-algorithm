// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(n => n.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // traverseBF(fn) {
    //     let array = [this.root];

    //     while (array.length > 0) {
    //         let node = array.shift();
    //         fn(node);
    //         for (let child of node.children) {
    //             array.push(child);
    //         }
    //     }
    // }

    // traverseDF(fn) {
    //   let array = [this.root];

    //   while (array.length > 0) {
    //       let node = array.shift();
    //       fn(node);
    //       array.unshift(...node.children);

    //   }
    // }

    traverseBF(fn, current = this.root, siblings = [], children = []) {
        if (current === null) {
            return;
        }
        console.log(current);
        fn(current);

        for (let child of current.children) {
            children.push(child);
        }

        if (siblings.length > 0) {
            current = siblings.shift();
            this.traverseBF(fn, current, siblings, children);
            return;
        }
        if (children.length > 0) {
            current = children.shift();
            this.traverseBF(fn, current, children, []);
        }
    }

    traverseDF(fn, node = this.root) {
        if (node === null) {
            return;
        }

        fn(node);

        for (let child of node.children) {
            this.traverseDF(fn, child);
        }
    }
}

module.exports = { Tree, Node };
