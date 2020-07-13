function minCameraCover(root) {
    let result = 0
    let covered = new Set()
    covered.add(null)
    dfs(root, null)
    return result

    function dfs(node, parent) {
        if (node === null) return

        dfs(node.left, node)
        dfs(node.right, node)

        if (
            (parent === null && !covered.has(node)) ||
            !covered.has(node.left) ||
            !covered.has(node.right)
        ) {
            covered.add(parent)
            covered.add(node)
            covered.add(node.left)
            covered.add(node.right)
            result++
        }
    }
}
