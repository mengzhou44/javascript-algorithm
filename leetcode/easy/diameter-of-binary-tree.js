var diameterOfBinaryTree = function(root) {
    let longest = 0;
  
    function  depth( node){
           if (node === null) return 0; 
           let  leftTreeHeight= depth( node.left)
           let  rightTreeHeight= depth(node.right)
           longest = Math.max(longest, leftTreeHeight+ rightTreeHeight)
        
           return 1+  Math.max(leftTreeHeight, rightTreeHeight);

    }
    
    depth(root)
  
   return longest; 
};
