class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function leafSimilar(root1, root2) {
    let array1 = []
    dfs(root1, array1)
    let array2 = []
    dfs(root2, array2)

    if (array1.length !== array2.length) {
        return false
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }

    return true
}

function dfs(root, array) {
    if (root === null) return

    if (root.left === null && root.right === null) {
        array.push(root.val)
    }

    dfs(root.left, array)
    dfs(root.right, array)
}
