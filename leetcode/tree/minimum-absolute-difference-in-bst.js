class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function getMinimumDifference(root) {
  let array = []
  inOrderDFS(root, array)

  if (array.length <= 1) throw new Error()
  let result = array[1]-array[0]
  for (let i = 1; i < array.length; i++) {
      result = Math.min( array[i]- array[i-1], result)
  }
  return result
}

function inOrderDFS(root, array) {
  if (root === null) return
  inOrderDFS(root.left, array)
  array.push(root.val)
  inOrderDFS(root.right, array)
}



let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.right = node3
node3.left = node2

console.log(getMinimumDifference(node1))
