class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function isBalanced(root) {
    if (root == null) return true
    if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(root) {
    if (root === null) return -1
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}
