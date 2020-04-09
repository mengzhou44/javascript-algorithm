function pruneTree(root) {
    if (root === null) return

    function dfs(root) {
        if (root === null) return
        if (allZeros(root.left)) {
            root.left = null
        }

        if (allZeros(root.right)) {
            root.right = null
        }

        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)
    return root
}

function allZeros(root) {
    if (root === null) return true

    return allZeros(root.left) && allZeros(root.right) && root.val === 0
}
