class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function longestUnivaluePath(root) {
    let res = 0

    function longest(root) {
        if (root === null) return 0

        let l = longest(root.left)
        let r = longest(root.right)

        if (root.left !== null && root.val === root.left.val) {
            l = l + 1
        } else {
            l = 0
        }

        if (root.right !== null && root.val === root.right.val) {
            r = r + 1
        } else {
            r = 0
        }
        res = Math.max(res, l + r)
        return Math.max(l, r)
    }

    longest(root)

    return res
}
