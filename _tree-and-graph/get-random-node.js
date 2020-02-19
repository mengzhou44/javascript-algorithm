class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
        this.size = 1
    }

    insert(node) {
        this.size++
        if (node.val < this.val) {
            addToTree(this.left, node)
        } else {
            addToTree(this.right, node)
        }
    }
}

function addToTreee(root, node) {
    if (root.left === null) {
        root.left = node
    } else {
        root.left.inser(node)
    }
}

function getRandomNode(root) {
    let randomIndex = Math.floor(Math.random() * root.size)
    let array = [root]
    let index = 0
    while (array.length > 0) {
        let node = array.shift()
        if (randomIndex === index) {
            return node
        }
        index++
        if (node.left !== null) {
            array.push(node.left)
        }
        if (node.right !== null) {
            array.push(node.right)
        }
    }

    return null
}
