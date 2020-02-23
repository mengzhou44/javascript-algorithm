class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
var levelOrderBottom = function(root) {
    if (root === null) return []
    let array = [root]
    let level = []
    let result = []
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0

        while (count < levelSize) {
            let cur = array.shift()

            level.push(cur.val)
            if (cur.left !== null) {
                array.push(cur.left)
            }
            if (cur.right !== null) {
                array.push(cur.right)
            }
            count++
        }
        result.unshift(level)
        level = []
    }

    return result
}
