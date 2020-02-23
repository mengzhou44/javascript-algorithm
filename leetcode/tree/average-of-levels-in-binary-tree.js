class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function averageOfLevels(root) {
    let array = [root]
    let result = []
    while (array.length > 0) {
        let sum = 0
        let size = array.length
        for (let i = 0; i < size; i++) {
            let current = array.shift()
            sum += current.val
            if (current.left !== null) {
                array.push(current.left)
            }
            if (current.right !== null) {
                array.push(current.right)
            }
        }
        result.push(sum / size)
    }

    return result
}
