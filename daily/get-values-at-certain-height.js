class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function getValuesAtHeight(root, height) {
    let array = []

    function helper(node, myHeight) {
        if (node === null) return
        myHeight++
        if (myHeight === height) {
            array.push(node.val)
        }
        helper(node.left, myHeight)
        helper(node.right, myHeight)
    }

    helper(root, array)
    return array
}

let root = new TreeNode('a')
root.left = new TreeNode('b')
root.right = new TreeNode('c')
root.left.left = new TreeNode('d')
root.right.right = new TreeNode('f')

console.log(getValuesAtHeight(root, 3))
