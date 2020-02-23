class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// function isSameTree(p,q) {
//   if (p===null && q=== null) return true

//   if (p === null || q === null) return false

//   if (p.val !==q.val) return false

//   return isSameTree(p.left,q.left) && isSameTree(p.right, q.right)

// }

function isSameTree(p, q) {
    let array1 = []
    let array2 = []

    dfs(p, array1)
    dfs(q, array2)
    
    if (array1.length !== array2.length) return false

    for (let i = 0; i < array1.length; i++) {
    
      if (array1[i] != array2[i]) return false
    }

    return true
}

function dfs(root, array) {
    if (root === null) {
        array.push(null)
        return
    }
    array.push(root.val)
    dfs(root.left, array)
    dfs(root.right, array)
}
