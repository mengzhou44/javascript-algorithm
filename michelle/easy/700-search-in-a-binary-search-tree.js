class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function searchBST(root, val) {
    if (root === null) return null

    if (root.val === val) return root

    if (root.val > val) return searchBST(root.left, val)

    return searchBST(root.right, val)
}
