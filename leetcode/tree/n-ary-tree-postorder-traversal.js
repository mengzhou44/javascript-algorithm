class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

function postorder(root) {
    let array = [root]
    let result = []
    while (array.length > 0) {
        let node = array.pop()
        if (node !== null) {
            result.unshift(node.val)
            if (node.children.length > 0) {
                array.push(...node.children)
            }
        }
    }

    return result
}
