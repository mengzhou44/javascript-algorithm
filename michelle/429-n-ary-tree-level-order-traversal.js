function levelOrder(root) {
    if (root === null) return []
    let result = []
    let array = [root]
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let node = array.shift()
            for (let child of node.children) {
                array.push(child)
            }
            level.push(node.val)
            count++
        }
        result.push(level)
    }

    return result
}
