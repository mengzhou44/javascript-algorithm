/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    let count = 0
    let smallest
    function dfs(node) {
        if (node === null) return
        dfs(node.left)
        count++
        if (count === k) {
            smallest = node.val
        }
        dfs(node.right)
    }
    dfs(root)
    return smallest
}
