// var mergeTrees = function(t1, t2) {
//   if (t1 === null) {
//     return t2;
//   }
//   if (t2 === null) {
//     return t1;
//   }
//   t1.val += t2.val;
//   t1.left = mergeTrees(t1.left, t2.left);
//   t1.right = mergeTrees(t1.right, t2.right);
//   return t1;
// };
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    if (this.data === []) return null;
    return  this.data.pop()
  }
    
  isEmpty() {
    return this.data.length === 0 ;
  }
}

var mergeTrees = function(t1, t2) {

  if (t1 === null) return t2; 
  let stack = new Stack();
  stack.push([t1, t2]);
  while (!stack.isEmpty()) {
   
    let nodes = stack.pop();
  
    if (nodes[0] === null || nodes[1]=== null ) continue;

    nodes[0].val = nodes[0].val +nodes[1].val;
      
    if (nodes[0].left === null) { 
      nodes[0].left = nodes[1].left;
    } else {
      stack.push([nodes[0].left, nodes[1].left]);
    }

    if (nodes[0].right === null) {
      nodes[0].right = nodes[1].right;
    } else {
      stack.push([nodes[0].right, nodes[1].right]);
    }
  }

  return t1;
};