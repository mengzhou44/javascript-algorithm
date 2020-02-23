class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function minDiffInBST(root) {
    let array = []
    dfs(root, array)

    let min = Number.MAX_SAFE_INTEGER

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] < min) {
            min = array[i] - array[i - 1]
        }
    }

    return min
}

function dfs(root, array) {
    if (root === null) return

    dfs(root.left, array)
    array.push(root.val)
    dfs(root.right, array)
}
