function isBalanced(root) {
    if (root == null) return true 
    
    return (Math.abs(getHeight(root.left) - getHeight(root.right)) <1 
}

function getHeight(root) {
     if (root == null) return 0
     
     return 1+ Math.max(getHeight(root.left), getHeight(root.right))
}