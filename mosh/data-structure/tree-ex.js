class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    insert(val) {
        if (this.val > val) {
            if (this.left !== null) {
                this.left.insert(val)
            } else {
                this.left = new TreeNode(val)
            }
        } else if (this.val < val) {
            if (this.right !== null) {
                this.right.insert(val)
            } else {
                this.right = new TreeNode(val)
            }
        }
    }
}

function equals(root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false

    if (root1.val !== root2.val) return false

    return equals(root1.left, root2.left) && equals(root1.right, root2.right)
}

let root1 = new TreeNode(4)
root1.left = new TreeNode(3)

let root2 = new TreeNode(4)
root2.left = new TreeNode(3)

console.log(equals(root1, root2))

function isValidBST(root) {
    if (root === null) return true
    if (root.left === null && root.right === null) return true
    return helper(root)

    function helper(root, min = null, max = null) {
        if (root === null) return true

        if (min !== null && root.val < min) {
            return false
        }
        if (max !== null && root.val > max) {
            return false
        }

        return (
            helper(root.left, null, root.val) &&
            helper(root.right, root.val, null)
        )
    }
}

let tree = new TreeNode(7)
tree.insert(4)
tree.insert(9)
tree.insert(1)
tree.insert(6)
tree.insert(8)
tree.insert(10)

console.log(isValidBST(tree))

function nodesAtDistance(root, k) {
    let result = []
    dfs(root)
    return result
    function dfs(current, distance = 0) {
        if (current === null) return

        dfs(current.left, distance + 1)
        dfs(current.right, distance + 1)

        if (distance === k) {
            result.push(current.val)
        }
    }
}

console.log(nodesAtDistance(tree, 2))

function bfs(root) {
    let array = [root]
    let result = []
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        while (count < levelSize) {
            let node = array.shift()
            result.push(node.val)
            if (node.left !== null) {
                array.push(node.left)
            }
            if (node.right !== null) {
                array.push(node.right)
            }
            count++
        }
    }
    return result
}

console.log(bfs(tree))

function treeSize(root) {
    if (root === null) return 0

    let size = 0
    dfs(root)
    return size
    function dfs(root) {
        if (root === null) return
        size++
        dfs(root.left)
        dfs(root.right)
    }
}

console.log(treeSize(tree))

function countLeaves(root) {
    if (root === null) return 0

    if (root.left === null && root.right === null) return 1

    return countLeaves(root.left) + countLeaves(root.right)
}

console.log(countLeaves(tree))

function findMax(root) {
    if (root === null) throw new Error('invalid!')
    let prev = root
    let current = root
    while (current) {
        prev = current
        current = current.right
    }
    return prev.val
}

console.log(findMax(tree))

function contains(tree, val) {
    return dfs(tree)

    function dfs(root) {
        if (root === null) return false
        if (root.val === val) return true

        return dfs(root.left) || dfs(root.right)
    }
}

console.log(contains(tree, 12))

function areSiblings(tree, val1, val2) {
    if (tree === null) return false

    if (tree.left === null || tree.right === null) return false

    let left = tree.left
    let right = tree.right
    if (left.val === val1 && right.val === val2) {
        return true
    }

    if (right.val === val1 && left.val === val2) {
        return true
    }

    return areSiblings(left, val1, val2) || areSiblings(right, val1, val2)
}

console.log(areSiblings(tree, 1, 6))
console.log(areSiblings(tree, 8, 10))

// function getAncestors(root, val) {
//     let ancestors = []
//     dfs(root)
//     return ancestors

//     function dfs(root, parent = null) {
//         if (root === null) return

//         dfs(root.left, root)
//         dfs(root.right, root)

//         if (parent !== null) {
//             if (root.val == val) {
//                 ancestors.push(parent.val)
//             }
//             if (ancestors.includes(root.val)) {
//                 ancestors.push(parent.val)
//             }
//         }
//     }
// }



function getAncestors(root, val) {
    let ancestors = []
    function helper(node, path = []) {
        if (node === null) return
        if (node.val === val) {
            ancestors = path
            return
        }
       
        helper(node.left,[...path, node.val])
        helper(node.right,[...path, node.val])
    }
    helper(root)
    return ancestors
}

console.log(getAncestors(tree, 1))
