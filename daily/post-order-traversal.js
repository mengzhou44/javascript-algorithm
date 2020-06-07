class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createTree(values) {  // post order 
    if (values.length === 0) return null
    let temp = values.pop()
    let root = new TreeNode(temp)
    let left = []
    let right = []
    for (let value of values) {
        if (value < temp) {
            left.push(value)
        } else {
            right.push(value)
        }
    }

    root.left = createTree(left)
    root.right = createTree(right)
    return root
}


console.log(createTree([2,4,3,8,5]))