class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createHeightBalancedTree(nums) {
 
    if (nums.length == 0) return null
    if (nums.length === 1) return new TreeNode(nums[0])
    let mid = Math.floor(nums.length / 2) 

    let root = new TreeNode(nums[mid])

    root.left = createHeightBalancedTree(nums.slice(0, mid))

    root.right = createHeightBalancedTree(nums.slice(mid+1))

    return root
}

const root = createHeightBalancedTree([1, 2, 3, 4, 5, 6, 7, 8])
console.log(root)
