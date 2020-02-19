class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function increasingBST(root) {
  let array = []
  dfs(root, array)
  let dummy = new TreeNode(0)
  let current = dummy

  while (array.length > 0) {
      let val = array.shift()
      current.right = new TreeNode(val)
      current = current.right
  }
  return dummy.right
}

function dfs(root, array) {
  if (root === null) return

  dfs(root.left, array)
  array.push(root.val)
  dfs(root.right, array)
}