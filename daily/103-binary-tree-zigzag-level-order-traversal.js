class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const LEFT_TO_RIGHT = 'LEFT_TO_RIGHT'
const RIGHT_TO_LEFT = 'RIGHT_TO_LEFT'
function zigzagLevelOrder(root) {
    let result = []
    let direction = LEFT_TO_RIGHT
    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            level.push(node)

            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }
            count++
        }
        if (direction === RIGHT_TO_LEFT) {
            level = level.reverse()
        }
        for (let item of level) {
            result.push(item.val)
        }
        direction = changeDirection(direction)
    }

    return result
}

function changeDirection(direction) {
    if (direction === LEFT_TO_RIGHT) {
        return RIGHT_TO_LEFT
    }
    return LEFT_TO_RIGHT
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

console.log(zigzagLevelOrder(root))
