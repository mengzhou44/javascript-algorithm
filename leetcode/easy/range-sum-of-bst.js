// var rangeSumBST = function(root, L, R) {
//   let sum = 0; 
//   let arr = [root]
//   while(arr.length> 0) {
//         let node =arr.shift()
        
//         if (node.val>=L  && node.val <=R ) {
//             sum+=node.val
//         }
      
//         if (node.left!==null) {
//             arr.push(node.left);
//         }
      
//         if (node.right !==null) {
//             arr.push(node.right);
//         }
//    }
//   return sum;
// };


// function rangeSumBST(root,  L, R) {
//   let ans=0; 
  
//   function  dfs(node,  L, R) {
//      if (node!== null) {
//         if (node.val>=L && node.val<=R) {
//            ans+=node.val
//         }
//         if (node.val>L) {
//            dfs(node.left, L,R, ans)
//         }
//         if (node.val<R) {
//            dfs(node.right, L,R, ans)
//        }
//     }
//     return ans
//   }
  
//   dfs(root,  L, R)
  
//   return ans
// };


 function rangeSumBST(root,  L, R) {
  let stack = [root]
  let sum =0;
  while(stack.length>0) {
          let node = stack.pop()
          if (node !== null) {
              if (node.val>=L && node.val<=R) {
                 sum+= node.val
              }
              
              if (node.val>L) {
                 stack.push(node.left)
              }

              if (node.val<R ) {
                stack.push(node.right)
              }
          }
  }

  return sum;
}