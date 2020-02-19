class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function createBSTSequences(root) {
    if (root === null) {
        return []
    }

    if (root.left === null || root.right === null) {
        return [root.val]
    }
    let weaved = []

    weaveSequences(
        createBSTSequences(root.left),
        createBSTSequences(root.right),
        weaved,
        [root.val]
    )

    return weaved
}

function weaveSequences(array1, array2, weaved, prefix) {
    if (array1.length === 0 || array2.length === 0) {
        let temp = [...prefix, ...array1, ...array2]
        weaved.push(temp)
        return
    }

    let item = array1.shift()
    prefix.push(item)
    weaveSequences(array1, array2, weaved, prefix)
    prefix.pop()
    array1.unshift(item)

    item = array2.shift()
    prefix.push(item)
    weaveSequences(array1, array2, weaved, prefix)
    prefix.pop()
    array2.unshift(item)
}

let node = new Node(2)
node.left = new Node(1)
node.right = new Node(3)

console.log(createBSTSequences(node))
