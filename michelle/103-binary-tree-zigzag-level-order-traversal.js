function zigzagLevelOrder(root) {
    function addLevelToResult(array, result) {
        if (array.length > 0) {
            if (toRight) {
                result.push(array)
            } else {
                result.push(array.reverse())
            }
        }
    }

    if (root === null) return []
    let array = [root]
    let result = [[root.val]]
    let toRight = false
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0

        while (count < levelSize) {
            let item = array.shift()

            if (item.left !== null) {
                array.push(item.left)
            }

            if (item.right !== null) {
                array.push(item.right)
            }
            count++
        }

        addLevelToResult(array, result)

        toRight = !toRight
    }

    return result
}
