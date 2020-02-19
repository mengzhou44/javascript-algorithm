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

function isSubtree(s, t) {
    const orderString1 = getOrderString(s)
    console.log(orderString1)
    const orderString2 = getOrderString(t)
    console.log(orderString2)

    return orderString1.includes(orderString2)
}

function getOrderString(root) {
    if (root === null) {
        return ['X']
    }

    let temp = [
        ' '+ root.val + ' ',
        ...getOrderString(root.left),
        ...getOrderString(root.right)
    ]
    return temp.join(',')
}

// let node1 = new Node(1)
// let node2 = new Node(2)
// let node3 = new Node(3)
// let node4 = new Node(4)
// let node5 = new Node(5)
// let node6 = new Node(6)
// let node7 = new Node(7)

// node4.left = node2
// node4.right = node6

// node2.left = node1
// node2.right = node3

// node6.left = node5
// node6.right = node7

let node1 = new Node(12)
let node2 = new Node(2)
console.log(isSubtree(node1, node2))
