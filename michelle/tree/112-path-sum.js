function hasPathSum(root, sum) {
  if (root === null) return false

  if (root.left !== null || root.right !== null) {
      return (
          hasPathSum(root.left, sum - root.val) ||
          hasPathSum(root.right, sum - root.val)
      )
  }

  return root.val === sum
}