class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function searchBST(root, val) {
    let array = [root]
    while (array.length > 0) {
        let node = array.shift()
        if (node.val === val) {
            return node
        }
        if (node.left !== null) {
            array.unshift(node.left)
        }
        if (node.right !== null) {
            array.unshift(node.right)
        }
    }

    return null
}
