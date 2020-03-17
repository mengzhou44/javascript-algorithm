function lowestCommonAncestor(root, p, q) {
    if (root === null) throw new Error()
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    return root
}
