class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function fullBinaryTree(root) {
    dfs(root)

    function dfs(root) {
        if (root === null) return null

        if (root.left === null && root.right === null) return root

        if (root.left !== null && root.right !== null) {
            root.left = dfs(root.left)
            root.right = dfs(root.right)
            return root
        }

        if (root.left === null) {
            root = root.right
        } else {
            root = root.left
        }
        return dfs(root)
    }

}

let tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.right.right = new TreeNode(4)
tree.right.left = new TreeNode(9)
tree.left.left = new TreeNode(0)

fullBinaryTree(tree)
console.log(tree)
