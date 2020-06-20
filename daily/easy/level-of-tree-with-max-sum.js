class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findLevelWithMaxSum(root) {
    let array = [root]
    let temp = []
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let sum = 0
        while (count < levelSize) {
            let node = array.shift()
            sum += node.val
            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }
            count++
        }
        temp.push(sum)
    }

    let max = Number.MIN_SAFE_INTEGER
    let result = -1
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i]
            result = i
        }
    }
    return result
}

let root = new TreeNode(1)
root.left = new TreeNode(4)
root.right = new TreeNode(5)

root.left.left = new TreeNode(3)
root.left.right = new TreeNode(2)

root.right.left = new TreeNode(4)
root.right.right = new TreeNode(-1)

console.log(findLevelWithMaxSum(root))
