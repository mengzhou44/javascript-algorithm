//solution 1 recursive
function lowestCommonAncestor(root, p, q) {
    if (root === null) return null

    if (covers(root.left, p) && covers(root.left, q)) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (covers(root.right, p) && covers(root.right, q)) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
}

function covers(node1, node2) {
    if (node1 === null) return false
    if (node1.val === node2.val) return true

    return covers(node1.left, node2) || covers(node1.right, node2)
}

// solution 2 iterative
function lowestCommonAncestor(root, p, q) {
    let parents = new Map()
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
