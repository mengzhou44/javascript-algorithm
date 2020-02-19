class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

function preorder(root) {
    let array = [root]
    let result = []
    while (array.length > 0) {
        let node = array.shift()
        if (node !== null) {
            result.push(node.val)
            if (node.children.length > 0) {
                array.unshift(...node.children)
            }
        }
    }

    return result
}
