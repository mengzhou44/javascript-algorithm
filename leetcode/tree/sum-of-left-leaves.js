class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function sumOfLeftLeaves(root) {
    return dfs(root)
}

function dfs(root) {
    if (root === null) return 0

    let sum = 0
    if (root.left !== null) {
        if (root.left.left === null && root.left.right === null) {
            sum = root.left.val
        }
    }

    sum = sum + dfs(root.left) + dfs(root.right)

    return sum
}
