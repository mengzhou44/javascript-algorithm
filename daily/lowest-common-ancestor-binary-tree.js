function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

function lowestCommonAncestor(root, p, q) {
    let parents = new Map()
    parents.set(root, null)
    let stack = [root]

    while (!parents.has(p) || !parents.has(q)) {
        let node = stack.pop()
        if (node.left !== null) {
            parents.set(node.left, node)
            stack.push(node.left)
        }

        if (node.right !== null) {
            parents.set(node.right, node)
            stack.push(node.right)
        }
    }

    let ancestors = []

    while (p !== null) {
        ancestors.push(p)
        p = parents.get(p)
    }

    while (!ancestors.includes(q)) {
        q = parents.get(q)
    }
    return q
}


