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
function sumNumbers(root) {
    let numbers = []
    function dfs(root, number = 0) {
        if (root === null) return

        number = 10 * number + root.val

        if (root.left === null && root.right === null) {
            numbers.push(number)
            return
        }

        dfs(root.left, number)
        dfs(root.right, number)
    }

    dfs(root)

    return numbers.reduce((sum, number) => sum + number, 0)
}
