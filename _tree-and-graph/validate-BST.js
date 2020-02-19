class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// function isValidBST(root) {
//   let array = flattenTree(root)
//   if (array.length <= 1) return true
//   for (let i = 1; i < array.length; i++) {
//       if (array[i] <= array[i -1]) {
//           return false
//       }
//   }
//   return true
// }

// function flattenTree(root) {
//   if (root === null) {
//       return []
//   }
//   let temp = []
//   let left = flattenTree(root.left)
//   temp.push(...left)

//   temp.push(root.val)

//   let right = flattenTree(root.right)
//   temp.push(...right)

//   return temp
// }

function isValidBST(root, min, max) {
    if (root === null) return true

    if (min !== null && root.val < min) {
        return false
    }

    if (max !== null && root.val > max) {
        return false
    }

    return (
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    )
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node4.left = node2
node4.right = node6

node2.left = node1
node2.right = node3

node6.left = node5
node6.right = node7

console.log(isValidBST(node4))
