class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// function isSubtree(s, t) {
//   let array = [s]
//   while (array.length > 0) {
//       let node = array.shift()
//       if (matchTree(node, t)) {
//           return true
//       }
//       if (node.left !== null) {
//           array.push(node.left)
//       }
//       if (node.right !== null) {
//           array.push(node.right)
//       }
//   }

//   return false
// }

// function matchTree(t1, t2) {
//   if (t1 === null && t2 === null) return true

//   if (t1 === null || t2 === null) return false

//   if (t1.val !== t2.val) return false

//   return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right)
// }

// function isSubtree(s, t) {
//   const orderString1 = getOrderString(s)
//   const orderString2 = getOrderString(t)

//   return orderString1.includes(orderString2)
// }

// function getOrderString(root) {
//   if (root === null) {
//       return '[X]'
//   }

//   return `[${root.val}], ${getOrderString(root.left)}, ${getOrderString(root.right)}`

// }

function isSubtree(s, t) {
    if (s === null && t === null) return true

    if (s === null || t === null) return false

    if (
        s.left === null &&
        s.right === null &&
        t.left === null &&
        t.right === null
    ) {
        return s.val === t.val
    }

    return isSubStree(s.left, t) || isSubtree(s.right, t)
}
