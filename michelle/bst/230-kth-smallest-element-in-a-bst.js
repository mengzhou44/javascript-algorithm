function kthSmallest(root, k) {
    let result
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        k = k - 1
        if (k === 0) {
            result = root.val
        }

        dfs(root.right)
    }

    dfs(root)

    return result
}

var kthSmallest = function(root, k) {
    let array = []

    function dfs(root) {
        if (root === null) {
            return
        }

        dfs(root.left)

        array.push(root.val)

        dfs(root.right)
    }

    dfs(root)

    return array[k - 1]
}
