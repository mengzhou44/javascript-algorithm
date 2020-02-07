class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
        node.parent = this;
    }

    setRight(node) {
        this.right = node;
        node.parent = this;
    }
}

// function findCeilingFloor(root, value) {
//     let arr = [root];
//     let floor = Number.MIN_SAFE_INTEGER;
//     let ceiling = Number.MAX_SAFE_INTEGER;
//     while (arr.length > 0) {
//         let node = arr.shift();
//         if (node.data < value) {
//             if (node.data > floor) {
//                 floor = node.data;
//             }
//         } else if (node.data > value) {
//             if (node.data < ceiling) {
//                 ceiling = node.data;
//             }
//         }

//         if (node.left) {
//             arr.push(node.left);
//         }
//         if (node.right) {
//             arr.push(node.right);
//         }
//     }
//     return [floor, ceiling];
// }

function findCeilingFloor(root, value) {
    const node = findNode(root, value);
 
    const ceiling = findCeiling(node);
    const floor = findFloor(node);

    return [ceiling, floor];
}

function findCeiling(node) {
 
    if (node.right !== null) {
        return leftMostValue(node.right);
    }
    let parent = node.parent;
  
    while (parent.data> node.data) {
        parent = parent.parent;
    }

    return parent.data;
}

function findFloor(node) {
    if (node.left !== null) {
        return rightMostValue(node.left);
    }
    let parent = node.parent;
    while (parent !== null && parent.data < node.data) {
        parent = parent.parent;
    }
    return parent.data;
}

function rightMostValue(node) {
    while (node.right !== null) {
        node = node.right;
    }
    return node.data;
}

function leftMostValue(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node.data;
}

function findNode(root, value) {
    let arr = [root];
    while (arr.length > 0) {
        let node = arr.shift();
        if (node.data === value) {
            return node;
        }
        if (node.left !== null) {
            arr.push(node.left);
        }
        if (node.right !== null) {
            arr.push(node.right);
        }
    }
    throw 'Node is not found!';
}

let root = new Node(8);
let node4 = new Node(4);
let node12 = new Node(12);

let node2 = new Node(2);
let node6 = new Node(6);
let node10 = new Node(10);
let node14 = new Node(14);

root.setLeft(node4);
root.setRight(node12);

node4.setLeft(node2);
node4.setRight(node6);

node12.setLeft(node10);
node12.setRight(node14);

const result = findCeilingFloor(root, 10);

console.log(result);
