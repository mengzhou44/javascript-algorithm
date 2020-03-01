// function isSameTree(p, q) {
//     let array1 = []
//     let array2 = []

//     dfs(p, array1)
//     dfs(q, array2)

//     if (array1.length !== array2.length) return false

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) return false
//     }

//     return true
// }

// function dfs(root, array) {
//     if (root === null)  {
//        array.push(null)
//       return
//     }
//     dfs(root.left, array)
//     array.push(root.val)
//     dfs(root.right, array)
// }



function isSameTree(p, q) {
  if (p === null && q === null)  return true
  
  if (p === null || q === null)  return false 

  return (  p.val === q.val && 
            isSameTree(p.left, q.left) && 
            isSameTree(p.right, q.right)
          )
}
