class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function rangeSumBST(root, L, R) {
    let nodes = [root]
    let sum = 0
    while (nodes.length > 0) {
        let node = nodes.shift()
        if (node.val > R) {
            break
        }
        if (node.val < L) {
            continue
        }

        if (node.val >= L && node.val <= R) {
            sum += node.val
        }
        if (node.left !== null) {
            nodes.unshift(node.left)
        }

        if (node.right !== null) {
            nodes.unshift(node.right)
        }
    }
    return sum
}
