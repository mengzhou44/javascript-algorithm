class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findCousins(root, val) {
    if (root === null) return []
    if (containsChild(root.left, val)) {
        return childValues(root.right)
    }
    if (containsChild(root.right, val)) {
        return childValues(root.left)
    }

    let temp1 = findCousins(root.left, val)
    let temp2 = findCousins(root.right, val)
    return [...temp1, ...temp2]
}

function containsChild(node, val) {
    if (node === null) return false

    if (node.left !== null && node.left.val === val) {
        return true
    }
    if (node.right !== null && node.right.val === val) {
        return true
    }
    return false
}

function childValues(node) {
    let result = []
    if (node === null) return result
    if (node.left !== null) {
        result.push(node.left.val)
    }
    if (node.right !== null) {
        result.push(node.right.val)
    }
    return result
}


let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(6)
root.right = new TreeNode(3)
root.right.left = new TreeNode(10)
root.right.left.left= new TreeNode(11)
root.right.right = new TreeNode(5)
root.right.right.left = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(findCousins(root,7))