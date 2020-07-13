class TreeNode {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

function splitBST(root, val) {
    let result = [null, null]
    if (root === null)  return result 
    if (root.val <=val ) {
         result = splitBST(root.right, val)
         root.right = result[0]
         result[0] = root
    } else {
         result = splitBST(root.left, val)
        root.left = result[1]
        result[1] = root
    }
    return result 
}
 

let root = new TreeNode(3)
root.left = new TreeNode(1)
root.left.right = new TreeNode(2)

root.right = new TreeNode(4)
root.right.right = new TreeNode(5)

console.log(splitBST(root,2))

// # (3, (1, (2)), (4, None, (5)))
// # How the tree looks like
// #     3
// #   /   \
// #  1     4
// #   \     \
// #    2     5
 