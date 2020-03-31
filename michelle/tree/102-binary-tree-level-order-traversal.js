/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root === null) return []

    let array = [root]
    let result = []
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        let level = []
        while (count < levelSize) {
            let item = array.shift()
            if (item !== null) {
                level.push(item.val)
            }
            if (item.left !== null) {
                array.push(item.left)
            }
            if (item.right !== null) {
                array.push(item.right)
            }
            count++
        }

        levelSize = array.length
        result.push(level)
    }

    return result
}
