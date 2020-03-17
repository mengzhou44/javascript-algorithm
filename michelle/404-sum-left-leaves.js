function sumOfLeftLeaves(root) {
  
  return dfs(root)
 
}

function dfs(root) {
  
  if (root === null) return 0

  let sum=0
  if (root.left !== null) {
      if (root.left.left === null && root.left.right === null) {
          sum =root.left.val
      }
  }

  sum = sum+ dfs(root.left) + dfs(root.right)

  return sum
}



function sumOfLeftLeaves(root) {
     
  let sum = 0
  function helper(root) {
      if (root === null)  return
      
      if (root.left!== null &&
          root.left.left=== null  &&
          root.left.right === null) {
           sum+= root.left.val
      }
      helper(root.left)
      helper(root.right)
  }
 
  helper(root)
  return sum
}