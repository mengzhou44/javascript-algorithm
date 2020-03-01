function levelOrderBottom(root) {
    if (root === null) return []
    let array = [root]
    let result = []
    while (array.length > 0) {
        let level = []
        let levelSize = array.length
        for (let i = 0; i < levelSize; i++) {
            let current = array.shift()
            level.push(current.val)

            if (current.left !== null) {
                array.push(current.left)
            }
            if (current.right !== null) {
                array.push(current.right)
            }
        }

        result.unshift(level)
    }
    return result
}
