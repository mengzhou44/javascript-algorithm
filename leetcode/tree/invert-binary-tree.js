class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function invertTree(root) {
  if (root === null) return null

  if (root.left === null && root.right === null) return root
  let left = root.left
  let right = root.right
  root.left = invertTree(right)
  root.right = invertTree(left)

  return root
}
