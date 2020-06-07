class TreeNode {
    constructor(val) {
       this.val = val 
       this.left = null 
       this.right =null
     
    }
}

function inOrderSuccessor(root, node){
     let search=false
     let  result =null 
     function dfs(current) {
         if (current === null)  return 
         dfs(current.left)

         if (current === node)  {
             search = true 
         } else if (search=== true) {
            search= false 
            result =current.val
            return 
         }
         
         dfs(current.right)
     }
      dfs(root)
      return result 
}



tree = new TreeNode(3)
tree.left = new TreeNode(2)
tree.right = new TreeNode(4)
tree.left.left = new TreeNode(1)
tree.right.right = new TreeNode(5)
 

console.log(inOrderSuccessor(tree, tree.left))
console.log(inOrderSuccessor(tree, tree.right))
