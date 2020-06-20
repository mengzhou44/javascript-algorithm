class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findSubTree(root1, root2) {
    if (root1 === null) return false

    if (dfs(root1, root2)) {
        return true
    }

    return findSubTree(root1.left, root2) || findSubTree(root1.right, root2)

    function dfs(root1, root2) {
        if (root1 === null && root2 === null) return true
        if (root1 === null || root2 === null) {
            return false
        }
        if (root1.val !== root2.val) {
            return false
        }

        return dfs(root1.left, root2.left) && dfs(root1.right, root2.right)
    }
}

let root1 = new TreeNode(1)
root1.left = new TreeNode(4)
root1.right = new TreeNode(5)
root1.left.left = new TreeNode(3)
root1.left.right = new TreeNode(2)

root1.right.left = new TreeNode(4)
root1.right.right = new TreeNode(-1)

let root2 = new TreeNode(4)
root2.left = new TreeNode(3)
root2.right = new TreeNode(2)

// Tree t:
//     1
//    / \
//   4   5
//  / \ / \
// 3  2 4 -1

// Tree s:
//   4
//  / \
// 3  2
// """

console.log(findSubTree(root1, root2))
