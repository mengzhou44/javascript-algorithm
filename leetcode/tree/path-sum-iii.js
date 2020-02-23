class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var pathSum = function(root, sum) {
    if (root === null) return 0

    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

function dfs(root, sum) {
    if (root === null) return 0

    let count = 0
    if (root.val === sum) {
        count++
    }

    count += dfs(root.left, sum - root.val)
    count += dfs(root.right, sum - root.val)

    return count
}
