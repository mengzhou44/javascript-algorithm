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

function getMinimumDifference(root) {
  
  let array = []
  function dfs(root) {
      if (root === null) return
  
      dfs(root.left)
      
      array.push(root.val)
      
      dfs(root.right)
  }
  
  dfs(root)

  
 let result =Number.MAX_SAFE_INTEGER
  
  for(let i = 1; i<array.length; i++) {
       result =  Math.min(array[i] - array[i-1], result)
  }
  
  return result 
}
