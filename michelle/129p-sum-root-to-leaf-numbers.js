/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function  sumNumbers(root) {
    let sum = 0    
    dfs(root)
    return sum

    function dfs(root, path=[]) {
        if (root === null)  return 
        if (root.left === null && root.right === null) {
            path.push(root.val)        
            sum += calculatePath(path)
            return 
        }
        path.push(root.val)
        dfs(root.left, [...path])
        dfs(root.right, [...path])
    }
  
}

function calculatePath(path) {
  let sum = 0 
  for(let item of path) {
      sum = 10*sum+item
  }
  return sum
}

