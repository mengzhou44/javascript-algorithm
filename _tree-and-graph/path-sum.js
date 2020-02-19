class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var hasPathSum = function(root, sum) {
    if (root === null) return false

    if (root.left === null && root.right === null) {
        if (root.val === sum) return true
    }

    sum = sum - root.val

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}
