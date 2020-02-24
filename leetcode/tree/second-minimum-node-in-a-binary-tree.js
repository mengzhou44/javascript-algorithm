class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function findSecondMinimumValue(root) {
    let res
    function dfs(node) {
        if (node === null) return
        dfs(node.left)
        dfs(node.right)
        if (node.val != root.val) {
            if (res === undefined) {
                res = node.val
            } else {
                res = Math.min(res, node.val)
            }
        }
    }
    dfs(root)
    if (res === undefined) res = -1
    return res
}

let node1 = new Node(2)
let node2 = new Node(2)
let node3 = new Node(5)
let node4 = new Node(5)
let node5 = new Node(7)

node1.left = node2
node1.right = node3

node3.left = node4
node3.right = node5

console.log(findSecondMinimumValue(node1))
