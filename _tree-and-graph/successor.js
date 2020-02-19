class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    setLeft(node) {
        this.left = node
        node.parent = this
    }

    setRight(node) {
        this.right = node
        node.parent = this
    }
}

function inOrderSucc(node) {
    if (node === null) return null
    if (node.right !== null) {
        let temp = node.right
        while (temp.left !== null) {
            temp = temp.left
        }
        return temp
    }

    let parent = node.parent
    while (parent) {
        if (parent.val > node.val) {
            return parent
        }
        parent = parent.parent
    }
    return null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node4.setLeft(node2)
node4.setRight(node6)

node2.setLeft(node1)
node2.setRight(node3)

node6.setLeft(node5)
node6.setRight(node7)

console.log(inOrderSucc(node3))
