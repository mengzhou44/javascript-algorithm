class TreeNode {
    constructor(val) {
       this.val = val 
       this.left = this.right = null
    }
}

function deepest(node) {
    if (node === null) return null
    let array = [node]

    let temp = []
    let levelSize = 0
     
    while (array.length > 0) {
        levelSize = array.length
        
        for (let i = 0; i < levelSize; i++) {
            let cur = array.shift()
            temp.push(cur)
            if (cur.left !== null) {
                array.push(cur.left)
            }
            if (cur.right !== null) {
                array.push(cur.right)
            }
        }
    }

    let result = []
    for (let i = 0; i < levelSize; i++) {
        result.unshift(temp.pop())
    }

    return result
}


let root = new TreeNode('a')
root.left = new TreeNode('b')
root.right = new TreeNode('c')
root.left.left  = new TreeNode('d')


console.log(deepest(root))