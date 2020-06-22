var findMode = function(root) {
    let modes = {}
    dfs(root, modes)
    let maxCount = 0
    for (let count of Object.values(modes)) {
        if (count > maxCount) {
            maxCount = count
        }
    }

    return Object.keys(modes).filter(key => modes[key] === maxCount)
}

function dfs(root, modes) {
    if (root === null) return

    dfs(root.left, modes)

    dfs(root.right, modes)

    if (modes[root.val] === undefined) {
        modes[root.val] = 1
    } else {
        modes[root.val] += 1
    }
}
