function sortedArrayToBST(nums) {
    if (nums.length === 0) return null

    if (nums.length === 1) return new TreeNode(nums[0])

    let mid = Math.floor(nums.length / 2)

    let root = new TreeNode(nums[mid])

    let leftArray = nums.slice(0, mid)
    let rightArray = nums.slice(mid + 1)

    root.left = sortedArrayToBST(leftArray)
    root.right = sortedArrayToBST(rightArray)

    return root
}
