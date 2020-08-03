class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    print() {
        console.log(
            `val: ${this.val}, left: ${this.left}   right: ${this.right}`
        )
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

    find(val) {
        if (this.val === val) return true
        if (this.val > val) {
            if (this.left === null) return false
            return this.left.find(val)
        }
        if (this.right === null) return false
        return this.right.find(val)
    }
}

function dfs(node) {
    if (node === null) return
    console.log(node.val)
    dfs(node.left)
    dfs(node.right)
}

function dfs1(node) {
    if (node === null) return
    dfs(node.left)
    console.log(node.val)
    dfs(node.right)
}

function dfs2(node) {
    if (node === null) return
    dfs(node.left)
    dfs(node.right)
    console.log(node.val)
}

function dfs3(node) {
    if (node === null) return
    let array = [node]
    while (array.length > 0) {
        let node = array.shift()
        console.log(node.val)
        if (node.right !== null) {
            array.unshift(node.right)
        }
        if (node.left !== null) {
            array.unshift(node.left)
        }
    }
}

function treeHeight(root) {
    if (root.left===null && root.right=== null ) return 0

    let leftHeight = treeHeight(root.left)
    let rightHeight = treeHeight(root.right)

    return 1 + Math.max(leftHeight, rightHeight)
}

function minValue(root) {
    let min = Number.MAX_SAFE_INTEGER
    dfs(root)
    return min

    function dfs(root) {
        if (root === null) return
        min = Math.min(root.val, min)
        dfs(root.left)
        dfs(root.right)
    }
}
function minValue1(root) {
    if (root === null)  throw new Error("invalid exception")
     let current = root 
     let last = current
     while(current) {
        last = current
        current = current.left 
     }
     return last.val
}

let tree = new TreeNode(7)
tree.insert(4)
tree.insert(9)
tree.insert(1)
tree.insert(6)
tree.insert(8)
tree.insert(10)

dfs(tree)

console.log(`Height: ${treeHeight(tree)}`)

console.log(`Min value: ${minValue(tree)}`)
console.log(`Min value: ${minValue1(tree)}`)
