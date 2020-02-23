class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var isCousins = function(root, x, y) {
    let array = [root]

    while (array.length > 0) {
        let levelSize = array.length
        let has_x = false
        let has_y = false
        let count = 0
        while (count < levelSize) {
            let cur = array.shift()
            if (cur.val === x) {
                has_x = true
            }
            if (cur.val === y) {
                has_y = true
            }
            if (cur.left !== null && cur.right !== null) {
                if (cur.left.val === x && cur.right.val === y) {
                    return false
                }
                if (cur.left.val === y && cur.right.val === x) {
                    return false
                }
            }

            if (cur.left !== null) {
                array.push(cur.left)
            }
            if (cur.right !== null) {
                array.push(cur.right)
            }
            count++
        }
        if (has_x && has_y) return true

        if (has_x || has_y) {
            return false
        }
    }

    return false
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.left = node2
node1.right = node3
node2.right = node4
node3.right = node5

console.log(isCousins(node1, node4, node5))
