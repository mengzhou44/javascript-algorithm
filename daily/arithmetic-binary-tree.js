class  TreeNode {
  constructor(val) {
     this.val = val
     this.left = null 
     this.right =null
  }
}

function evaluate(root) {
    if (root === null) throw new Error()
    if (!"+-*/".split('').includes(root.val)) {
       return  parseInt(root.val)
    }
    const left =  evaluate(root.left)
    const right =  evaluate(root.right)

    if (root.val ==="+") return left+right
    if (root.val ==="-") return left-right
    if (root.val ==="*") return left*right
     
    return left / right
}

let tree = new TreeNode('*')
tree.left = new TreeNode('+')
tree.right= new TreeNode('+')

tree.left.left =  new TreeNode('3')
tree.left.right =  new TreeNode('2')

tree.right.left =  new TreeNode('4')
tree.right.right =  new TreeNode('5')

console.log(evaluate(tree))