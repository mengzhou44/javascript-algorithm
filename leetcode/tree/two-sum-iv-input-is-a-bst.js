class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function findTarget(root, k) {
  return dfs(root, [], k )
}

function dfs(root, visited, val) {
  if (root === null) return false

  if (visited.includes(val - root.val)) {
      return true
  } else {
      visited.push(root.val)
  }

  let temp1 = dfs(root.left, visited, val)
  let temp2 = dfs(root.right, visited, val)

  return temp1 || temp2
}

