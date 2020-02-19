class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// function isUnivalTree(root) {
//     let array = [root]
//     let rootValue = root.val
//     while (array.length > 0) {
//         let node = array.shift()
//         if (node.val !== rootValue) {
//             return false
//         } else {
//             if (node.left !== null) {
//                 array.unshift(node.left)
//             }
//             if (node.right !== null) {
//                 array.unshift(node.right)
//             }
//         }
//     }

//     return true
// }

function isUnivalTree(root) {
    if (root === null) return true

    if (root.left === null && root.right === null) {
        return true
    }

    if (isUnivalTree(root.left) === false) {
        return false
    }

    if (isUnivalTree(root.right) === false) {
        return false
    }

    if (root.left !== null) {
        if (root.val !== root.left.val) {
            return false
        }
    }

    if (root.right !== null) {
        if (root.val !== root.right.val) {
            return false
        }
    }

    return true
}
