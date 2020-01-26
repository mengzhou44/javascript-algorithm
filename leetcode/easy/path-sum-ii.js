/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let paths =[]
  findPaths(root, sum, current=[], paths)
  return paths
};

function findPaths(root, sum, current, paths) {
   if (root === null)  return
  
   current.push(root.val)
   if (root.val === sum && root.left === null && root.right === null) {
        paths.push(current)
        return
   } 
  
  findPaths(root.left,   sum-root.val, [...current], paths)
  findPaths(root.right, sum-root.val, [...current], paths)
}