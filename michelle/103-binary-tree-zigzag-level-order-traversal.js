function zigzagLevelOrder(root) {
    if (root === null) return []
    let array = [root]
    let direction = 'lr'
    let result = []
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            if (node !== null) {
                if (direction === 'lr') {
                    level.push(node.val)
                } else {
                    level.unshift(node.val)
                }
                addChildrenToArray(array, node)
            }
            count++
        }
        direction = changeDirection(direction)
        result.push(level)
    }

    return result
}

function addChildrenToArray(array, node) {
    if (node.left !== null) {
        array.push(node.left)
    }
    if (node.right !== null) {
        array.push(node.right)
    }
}

function changeDirection(direction) {
    if (direction === 'lr') {
        return 'rl'
    }
    return 'lr'
}
