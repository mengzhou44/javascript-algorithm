class TreeNode {
    constructor(val) {
       this.val = val 
       this.left = null
       this.right = null
    }
}

function minimumLevelSum(root) {

   let result = Number.MAX_SAFE_INTEGER
   let array = [root]
   while(array.length>0) {
       let levelSize = array.length 
       let count = 0 
       let levelSum=0
       while(count<levelSize) {
           let node = array.shift()
           levelSum += node.val
           if (node.left!== null) {
              array.push(node.left)
           }
           if (node.right!== null) {
            array.push(node.right)
         }
         count++
       }
      result = Math.min(result, levelSum)
   }

   return result 
  
}
 
let node = new TreeNode(10)
node.left = new TreeNode(2)
node.right = new TreeNode(8)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(1)
node.right.right = new TreeNode(2)


console.log(minimumLevelSum(node))
  