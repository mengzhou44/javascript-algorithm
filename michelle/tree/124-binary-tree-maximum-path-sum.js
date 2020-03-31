function maxPathSum(root) {
    let result = Number.MIN_SAFE_INTEGER

    function helper(root) {
        if (root === null) return 0
        let l = Math.max(0, helper(root.left))
        let r = Math.max(0, helper(root.right))

        let sum = root.val + l + r
        result = Math.max(result, sum)

        return root.val + Math.max(l, r)
    }

    helper(root)

    return result
}
