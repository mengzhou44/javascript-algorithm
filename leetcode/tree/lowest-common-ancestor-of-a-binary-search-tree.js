class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
// function lowestCommonAncestor(root, p, q) {
//     if (!covers(root, p) || !covers(root, q)) {
//         throw new Error()
//     }

//     if (covers(root.left, p) && covers(root.left, q)) {
//         return lowestCommonAncestor(root.left, p, q)
//     }

//     if (covers(root.right, p) && covers(root.right, q)) {
//         return lowestCommonAncestor(root.right, p, q)
//     }

//     return root
// }

// function covers(root, node) {
//     if (root === null) return false

//     if (root === node) return true

//     return covers(root.left, node) || covers(root.right, node)
// }


function lowestCommonAncestor(root, p, q) {
  if (root === null) {
     throw new Error()
  }
   
  if (root.val>p.val && root.val> q.val) {
      return lowestCommonAncestor(root.left, p, q)
  }

   if (root.val<p.val && root.val<q.val) {
    return lowestCommonAncestor(root.right, p, q)
   }

   return root
}

 