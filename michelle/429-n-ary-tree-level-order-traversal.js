var levelOrder = function(root) {
    if (root === null) return []
    let cur = [root]

    let result = [[root.val]]
    while (cur.length > 0) {
        let next = []
        let level = []
        let levelSize = cur.length
        for (let i = 0; i < levelSize; i++) {
            let node = cur.shift()
            for (let child of node.children) {
                level.push(child.val)
                next.push(child)
            }
        }
        if (level.length > 0) {
            result.push(level)
        }

        cur = next
    }

    return result
}
