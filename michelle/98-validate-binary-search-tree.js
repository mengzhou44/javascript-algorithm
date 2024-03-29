function isValidBST(root, min = null, max = null) {
    if (root === null) return true
    if (min !== null && root.val <= min) return false
    if (max !== null && root.val >= max) return false
    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    )
}
