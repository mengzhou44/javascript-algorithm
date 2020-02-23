class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function diameterOfBinaryTree(root) {
    if (root === null) return 0

    let max = 0

    function depth(root) {
        if (root === null) return 0

        const leftDepth = depth(root.left)
        const rightDepth = depth(root.right)
        max = Math.max(max, leftDepth + rightDepth)
        return 1 + Math.max(leftDepth, rightDepth)
    }

    depth(root)

    return max
}
