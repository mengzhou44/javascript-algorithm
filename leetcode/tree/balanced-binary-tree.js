class Node {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

function isBalanced(root) {
     if (root === null) return true
     let left  =  depth(root.left, node)
     let right =  depth(root.left, node)
     return Math.abs(left-right) <=1
};


function depth(root, node){
    if (root === null)  return 0
    if (root === node)  return 0

    return  1+ Math.max(depth(root.left, node), depth(root.right,node))
}