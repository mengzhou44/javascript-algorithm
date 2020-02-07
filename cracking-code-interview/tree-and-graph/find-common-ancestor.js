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

// function findCommonAncestor(node1, node2) {
//     const depth1 = getDepth(node1);
//     const depth2 = getDepth(node2);

//     const delta = Math.abs(depth1 - depth2);
//     let deeperNode = depth1 > depth2 ? node1 : node2;
//     let shallowerNode = depth1 > depth2 ? node2 : node1;

//     deeperNode = moveUpByN(deeperNode, delta);

//     while (deeperNode !== null && shallowerNode !== null) {
//         if (deeperNode === shallowerNode) {
//             return deeperNode;
//         }
//         deeperNode = deeperNode.parent;
//         shallowerNode = shallowerNode.parent;
//     }

//     return null;
// }

// function moveUpByN(node, n) {

//     let count = 0;
//     while (count < n) {
//         node = node.parent;
//         count++
//     }
//     return node;
// }

// function getDepth(node) {
//     let count = 0;
//     while (node.parent != null) {
//         count++;
//         node = node.parent;
//     }
//     return count;
// }

//solution 2
// function findCommonAncestor(node1, node2) {
//     if (node1 === node2) {
//         return node1;
//     }

//     let node = covers(node1, node2);
//     while (node === null) {
//         node1 = node1.parent;
//         node = covers(node1, node2);
//     }
//     return node;
// }

// function covers(a, b) {
//     let arr = [a];
//     while (arr.length > 0) {
//         let node = arr.shift();
//         if (node.visited === true) {
//             return null;
//         }

//         node.visted = true;
//         if (node === b) {
//             return a;
//         }
//         if (node.left !== null) {
//             arr.push(node.left);
//         }
//         if (node.right !== null) {
//             arr.push(node.right);
//         }
//     }

//     return null;
// }

function findCommonAncestor(root, node1, node2) {
    if (covers(root, node1) === false || covers(root, node2) === false) {
        return null;
    }
       
     return helper(root, node1, node2);
}

function helper(root, node1, node2) {
    if (root === null || node1 === null || node2 === null) {
        return null;
    }
    let node1OnLeft = covers(root.left, node1);
    let node2OnLeft = covers(root.left, node2);

    if (node1OnLeft !== node2OnLeft) return root;

    if (node1OnLeft === true) {
        return helper(root.left, node1, node2);
    }

    return helper(root.right, node1, node2);
}

function covers(root, node) {
    if (root === null) return false;

    if (root === node) return true;

    return covers(root.left, node) || covers(root.right, node);
}

let root = new Node(15);
let node12 = new Node(12);

let node3 = new Node(3);
let node14 = new Node(14);

let node17 = new Node(17);
let node18 = new Node(18);
let node16 = new Node(16);
let node19 = new Node(19);

root.setLeft(node12);
root.setRight(node17);

node12.setLeft(node3);
node12.setRight(node14);

node17.setLeft(node16);
node17.setRight(node18);

node18.setRight(node19);

let result = findCommonAncestor(root, node3, node18);
console.log(result.data);

result = findCommonAncestor(root,node16, node18);
console.log(result.data);

result = findCommonAncestor(root, node16, node19);
console.log(result.data);
