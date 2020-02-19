class Node {
    constructor(data) {
       this.data= data
       this.left= null
       this.right=null
    }

}

function getHeight(node) {
    if (node === null) return 0
    
    return Math.max(getHeight(node.left), getHeight(node.right)) +1
}

function  isBalanced(node){
    if (node === null)  return true
    
    if (Math.abs(getHeight(node.left) - getHeight(node.right)) >1) {
       return false 
    }
     
    return isBalanced(node.left) && isBalanced(node.right)
}