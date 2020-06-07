function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null

    let root = new TreeNode(preorder[0])

    const [leftInorder, rightInorder] = splitArray(inorder, preorder[0])

    const leftPreorder = preorder.filter((item) => leftInorder.includes(item))
    const rightPreorder = preorder.filter((item) => rightInorder.includes(item))

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
}

function splitArray(array, item) {
    let left = []
    let right = []
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i
        }
    }
    left = array.slice(0, index)
    right = array.slice(index + 1)

    return [left, right]
}
