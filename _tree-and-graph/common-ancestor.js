class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.irght = null
    }
}

// function lowestCommonAncestor(root, p, q) {
//     if (covers(root, p) === false || covers(root, q) === false) {
//         return null
//     }

//     if (covers(root.left, p) && covers(root.left, q)) {
//         return lowestCommonAncestor(root, left, p, q)
//     }

//     if (covers(root.right, p) && covers(root.right, q)) {
//         return lowestCommonAncestor(root, right, p, q)
//     }
//     return root
// }

// function covers(root, node) {
//     if (root === null) {
//         return false
//     }
//     if (root === node) {
//         return true
//     }
//     return covers(root.left, node) || covers(root.right, node)
// }

function lowestCommonAncestor(root, p, q) {
    if (covers(p, q)) {
        return p
    }

    if (covers(q, p)) {
        return q
    }

    let array = [root]
    while (array.length > 0) {
        let node = array.shift()
        if (node.left === p || node.left === q) {
            return node
        }
        if (node.right === p || node.right === q) {
            return node
        }
        if (node.left !== null) {
            array.push(node.left)
        }

        if (node.right !== null) {
            array.push(node.right)
        }
    }

    return null
}

function covers(root, node) {
    if (root === null) {
        return false
    }
    if (root === node) {
        return true
    }
    return covers(root.left, node) || covers(root.right, node)
}
