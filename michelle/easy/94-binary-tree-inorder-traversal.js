// solution 1 :  recursive
function inorderTraversal(root) {
    let array = []
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        array.push(root.val)
        dfs(root.right)
    }

    dfs(root)
    return array
}

//solution 2:
function inorderTraversal(root) {
    if (root === null) return []
    let result = []
    let stack = []
    let current = root
    while (stack.length != 0 || current) {
        if (current) {
            stack.push(current)
            current = current.left
        } else {
            current = stack.pop()
            result.push(current.val)
            current = current.right
        }
    }

    return result
}

function inorderTraversal(root) {
    if (root === null) return []
    let array1 = inorderTraversal(root.left)
    let array2 = inorderTraversal(root.right)
    return [...array1, root.val, ...array2]
}
