function deleteNode(root, key) {
    if (root === null) return root

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (root.left === null && root.right === null) {
            return null
        } else if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            let node = findMinNode(root.right)
            root.val = node.val
            root.right = deleteNode(root.right, node.val)
        }
    }
    return root
}

function findMinNode(root) {
    let minNode = null
    function dfs(root) {
        if (root === null) return
        if (root.left !== null) {
            dfs(root.left)
        } else {
            minNode = root
        }
    }
    dfs(root)

    return minNode
}
