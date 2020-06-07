class TreeNode {
    constructor(val) {
       this.val = val 
       this.left = null 
       this. right = null 
    }
}

function largestPathSum(root) {
     let max=Number.MIN_SAFE_INTEGER
     let result=[]
     function helper(node, path=[]) {
          if (node === null) return 
          path.push(node.val)
          if (node.left=== null && node.right === null) {
               let pathSum = path.reduce((sum,item)=> sum+item)
               if (pathSum> max){ 
                   max=pathSum
                   result=path
               }
          }
          helper(node.left,  [...path])
          helper(node.right, [...path])
     }
     helper(root)

     return result 
}

let root = new TreeNode(1)
root.left = new TreeNode(3)
root.right = new TreeNode(2)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(4)


console.log(largestPathSum(root))