class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent=null;
    }
    setLeft(node) {
        this.left=node
        node.parent= this
    }

    setRight(node) {
        this.right=node
        node.parent= this
    }
}

function inOrderNextSuccessor(node) {
    if (node === null) return null;
    if (node.left !== null) return leftMostChild(node.right);

    let p = node.parent;
    while (p !== null && p.left !== node) {
        node = p;
        p= p.parent;
    }

    return p
}

function leftMostChild(node) {
    if (node === null) return null;

    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

let root = new Node(15)
let node12 = new Node(12)

let node3 = new Node(3)
let node14 = new Node(14)

let node17 = new Node(17)
let node18 = new Node(18)
let node16 = new Node(16)

root.setLeft(node12)
root.setRight(node17)

node12.setLeft(node3)
node12.setRight(node14)

node17.setLeft(node16)
node17.setRight(node18)

let result1= inOrderNextSuccessor(node14)
console.log(result1.data)


let result2= inOrderNextSuccessor(root)
console.log(result2.data)