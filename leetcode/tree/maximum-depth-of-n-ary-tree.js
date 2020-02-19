class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

// function maxDepth(root) {
//     if (root === null) return 0
//     let array = [root, 's']
//     let depth = 0
//     while (array.length > 1) {
//         let node = array.shift()
//         if (node !== 's' && node !== null) {
//             array.push(...node.children)
//         } else if (node === 's') {
//             depth++
//             array.push('s')
//         }
//     }
//     return depth + 1
// }

function maxDepth(root) {
    if (root === null) return 0

    if (root.left === null && root.right === null) return 1

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
