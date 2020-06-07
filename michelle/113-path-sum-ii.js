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

function pathSum(root, sum) {
    let result = []

    function helper(node, target, path = []) {
        if (node === null) return
        path.push(node.val)

        if (node.left === null && node.right === null && node.val === target) {
            result.push(path)
        }

        helper(node.left, target - node.val, [...path])
        helper(node.right, target - node.val, [...path])
    }

    helper(root, sum)
    return result
}
