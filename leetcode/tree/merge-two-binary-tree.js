class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function mergeTrees(t1, t2) {
    if (t1 === null) {
        return t2
    } else if (t2 === null) {
        return t1
    }

    let t = new TreeNode(t1.val + t2.val)
    t.left = mergeTrees(t1.left, t2.left)
    t.right = mergeTrees(t1.right, t2.right)

    return t
}
