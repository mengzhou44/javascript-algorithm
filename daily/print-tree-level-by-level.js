class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function printTree(root) {
    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let temp = []
        while (count < levelSize) {
            let current = array.shift()
            temp.push(current.val)
            if (current.left !== null) {
                array.push(current.left)
            }
            if (current.right !== null) {
                array.push(current.right)
            }
            count++
        }
        console.log(temp.join(''))
    }
}

tree = new TreeNode('a')
tree.left = new TreeNode('b')
tree.right = new TreeNode('c')
tree.left.left = new TreeNode('d')
tree.left.right = new TreeNode('e')
tree.right.left = new TreeNode('f')
tree.right.right = new TreeNode('g')
printTree(tree)
