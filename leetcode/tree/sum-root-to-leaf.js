class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function sumRootToLeaf(root) {
    return dfs(root)
}

function dfs(root, tempSum = 0) {
    if (root === null) {
        return 0
    }
    let sum = 0
    tempSum = tempSum * 2 + root.val
    if (root.left === null && root.right === null) {
        return tempSum
    }

    sum = sum + dfs(root.left, tempSum)
    sum = sum + dfs(root.right, tempSum)

    return sum
}
