class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function findTilt(root) {
  if (root === null) return 0
  let  result =0
  function helper(root) {
     if (root === null)  return 0
     const left = helper(root.left)
     const right = helper(root.right)
      result += Math.abs(left- right)
     return left+right +root.val
  }
  helper(root)
  return result
}
 