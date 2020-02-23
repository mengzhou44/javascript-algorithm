class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findClosestBSTValue(root, target) {
   let closest = Number.MAX_SAFE_INTEGER

   function dfs(root, target) {
 
    if (root === null) return
    let array = [root]
    while (array.length > 0) {
        let cur = array.shift()
        if (Math.abs(cur.val - target) < Math.abs(closest - target)) {
            closest = cur.val
        }
  
        if (cur.left !== null) {
            array.unshift(cur.left)
        }
        if (cur.right !== null) {
            array.unshift(cur.right)
        }
    }
    
  }

  dfs(root, target)
  return closest
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

console.log(findClosestBSTValue(node4, 5.1))
