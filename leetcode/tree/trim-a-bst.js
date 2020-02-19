class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function trimBST(root, L, R) {
  if (root === null) return null

  if (root.val < L) return trimBST(root.right, L, R)

  if (root.val > R ) return trimBST(root.left, L, R)
  
  let result = new TreeNode(root.val)
  
  result.left = trimBST(root.left, L, R)
  
  result.right = trimBST(root.right, L, R)

  return result
}