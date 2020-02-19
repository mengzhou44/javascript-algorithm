class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function getHeight(node) {
    console.log('node', node)
    if (node === null) {
        return -1
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
function isBalanced(root) {
    let leftHeight = getHeight(root.left)
    let rightHeight = getHeight(root.right)
    console.log(leftHeight)
    console.log(rightHeight)
    return Math.abs(leftHeight - rightHeight) <= 1
}

let node1 = new TreeNode(1)
let node2 = new TreeNode(2)
let node3 = new TreeNode(3)
let node4 = new TreeNode(4)
let node5 = new TreeNode(5)
let node6 = new TreeNode(6)
let node7 = new TreeNode(7)

node4.left = node2
node4.right = node6

node2.left = node1
node2.right = node3
node3.left = node7

console.log(isBalanced(node4))
