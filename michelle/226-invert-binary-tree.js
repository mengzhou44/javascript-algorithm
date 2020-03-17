function invertTree(root) {
    if (root === null) return root

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

function invertTree(root) {
    if (root === null) return root
    let temp = root.left
    root.left = invertTree(root.right)

    root.right = invertTree(temp)

    return root
}
