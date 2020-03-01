function sortedArrayToBST(nums) {
    if (nums.length === 0) return null
    if (nums.length === 1) return new TreeNode(nums[0])

    let middle = Math.floor(nums.length / 2)

    let root = new TreeNode(nums[middle])

    root.left = sortedArrayToBST(nums.slice(0, middle))
    root.right = sortedArrayToBST(nums.slice(middle + 1))

    return root
}
