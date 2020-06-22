/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
    if (root === null) return null
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else {
        if (root.left === null && root.right === null) {
            return null
        } else if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            let node = findMinNode(root.right)
            root.val = node.val
            root.right = deleteNode(root.right, node.val)
        }
    }
    return root
}

function findMinNode(root) {
    let current = root
    while (current.left !== null) {
        current = current.left
    }
    return current
}
