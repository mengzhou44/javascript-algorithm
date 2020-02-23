class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

var binaryTreePaths = function(root) {
  if (root === null) return []

  if (root.left === null && root.right === null) {
      return [`${root.val}`]
  }

  let paths = []
  if (root.left !== null) {
      let temp = binaryTreePaths(root.left).map(
          path => `${root.val}->${path}`
      )
      paths = [...paths, ...temp]
  }

  if (root.right !== null) {
      let temp = binaryTreePaths(root.right).map(
          path => `${root.val}->${path}`
      )
      paths = [...paths, ...temp]
  }

  return paths
}
