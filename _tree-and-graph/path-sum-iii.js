class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var pathSum = function(root, sum) {
    if (root === null) return 0

    return (
        dfs(root, sum) +
        pathSum(root.left, sum) +
        pathSum(root.right, sum)
    )
}

function dfs(root, sum) {
    if (root === null) return 0

    let count = 0
    if (root.val === sum) {
        count++
    }

    count += dfs(root.left, sum - root.val)
    count += dfs(root.right, sum - root.val)

    return count
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

console.log(pathSum(node4, 5))
