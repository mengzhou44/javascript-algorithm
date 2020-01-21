var isSymmetric = function(root) {
  if (root === null) return true; 

  return  isSymmetric1(root.left, root.right)
};


function  isSymmetric1(left, right) {
  if (left=== null && right === null) {
     return true; 
  }

  if (left === null || right === null) {
      console.log('false')
      return false 
  }

  if (left.val !== right.val) {
    return false
  }

  return  isSymmetric1(left.left, right.right) &&
         isSymmetric1(left.right, right.left)

}