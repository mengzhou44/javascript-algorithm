class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function filter(node, k) {
    if (node === null) return null
    node.left = filter(node.left, k)
    node.right = filter(node.right, k)

    if (node.left === null && node.right === null) {
        if (node.val === k) {
            return null
        }
    }
    return node
}

let root = new TreeNode(1)
root.left = new TreeNode(1)
root.right = new TreeNode(1)
root.left.left = new TreeNode(2)
root.right.left = new TreeNode(1)

console.log(filter(root, 1))
