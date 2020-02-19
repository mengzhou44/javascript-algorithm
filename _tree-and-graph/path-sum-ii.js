class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
var pathSum = function(root, sum) {
    
  let result =[]
  findPathSum(root, sum, [], result)
  return result
}

function findPathSum(root, sum, currentPath, result) {
  
  if (root === null) return
  
  currentPath.push(root.val)
  if (root.left === null && root.right === null) {
       if (root.val == sum) {
            result.push([...currentPath])
       } 
    
  }
 
  sum = sum-root.val
  if (root.left!==null) {
       findPathSum(root.left, sum, currentPath, result)
  }
  
   if (root.right!==null) {
       findPathSum(root.right, sum, currentPath, result)
  }
  
   currentPath.pop()
}

