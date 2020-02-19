class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}

function invertTree(root) {
    if (root === null) return null;

    let arr = [root];
    while (arr.length > 0) {
        let node = arr.shift();

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left) {
            arr.push(node.left);
        }
        if (node.right) {
            arr.push(node.right);
        }
    }
    return root;
}

let root = new Node('a');
let nodeB = new Node('b');
let nodeC = new Node('c');
let nodeD = new Node('d');
let nodeE = new Node('e');
let nodeF = new Node('f');

root.setLeft(nodeB);
root.setRight(nodeC)

nodeB.setLeft(nodeD);
nodeB.setRight(nodeE);

nodeC.setLeft(nodeF);
 
let result = invertTree(root)

console.log(root)