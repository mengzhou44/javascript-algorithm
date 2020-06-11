function sumOfLeftLeaves(root) {
    let sum = 0
    function helper(root) {
        if (root === null) return

        if (
            root.left !== null &&
            root.left.left === null &&
            root.left.right === null
        ) {
            sum += root.left.val
        }
        helper(root.left)
        helper(root.right)
    }

    helper(root)
    return sum
}

function sumOfLeftLeaves(root, isLeftChild = false) {
    if (root === null) return 0

    if (isLeftChild === true) {
        if (root.left === null && root.right === null) {
            return root.val
        }
    }

    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}

function sumOfLeftLeaves(root) {
    if (root === null) return 0
    let sum = 0
    if (root.left !== null) {
        if (root.left.left === null && root.left.right === null) {
            sum += root.left.val
        }
    }

    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
}
