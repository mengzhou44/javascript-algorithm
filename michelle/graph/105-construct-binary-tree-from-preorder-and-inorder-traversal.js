function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null

    let [leftInorder, rightInorder] = splitArray(inorder, preorder[0])
    let leftPreorder = preorder.filter((item) => leftInorder.includes(item))
    let rightPreorder = preorder.filter((item) => rightInorder.includes(item))

    let node = new TreeNode(preorder[0])
    node.left = buildTree(leftPreorder, leftInorder)
    node.right = buildTree(rightPreorder, rightInorder)
    return node
}

function splitArray(array, item) {
    let index = array.indexOf(item)

    let left = array.slice(0, index)
    let right = array.slice(index + 1)
    return [left, right]
}
