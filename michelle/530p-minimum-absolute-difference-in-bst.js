function getMinimumDifference(root) {
  let result = Number.MAX_SAFE_INTEGER
  let previous
  function dfs(root) {
      if (root === null) return
      dfs(root.left)
      if (previous !== undefined) {
          result = Math.min(root.val - previous, result) 
      }     
      previous = root.val
      dfs(root.right)
  }
  
  dfs(root)

  return result
}
 