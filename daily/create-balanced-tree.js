class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createBalancedTree(nums) {
    if (nums.length === 0) {
        return new Node(nums[0])
    }

    if (nums.length === 1) {
        return new Node(nums[0])
    }

    let middle = Math.floor(nums.length / 2)

    let root = new Node(nums[middle])

    root.left = createBalancedTree(nums.slice(0, middle))

    root.right = createBalancedTree(nums.slice(middle + 1))

    return root
}
