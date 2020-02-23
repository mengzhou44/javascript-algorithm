class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// function isSymmetric(root) {
//     if (root === null) return true
//     let array = [root]
//     while (array.length > 0) {
//         let levelSize = array.length
//         let count = 0
//         let level = []
//         while (count < levelSize) {
//             count++
//             let cur = array.shift()

//             if (cur.left !== null) {
//                 array.push(cur.left)
//             }

//             if (cur.right !== null) {
//                 array.push(cur.right)
//             }

//             if (cur.left === null) {
//                 level.push('null')
//             } else {
//                 level.push(cur.left.val)
//             }
//             if (cur.right === null) {
//                 level.push('null')
//             } else {
//                 level.push(cur.right.val)
//             }
//         }
//         if (isLevelSymmetric(level) === false) {
//             return false
//         }
//     }
//     return true
// }

// function isLevelSymmetric(level) {
//     if (level.length === 0) return true

//     return (
//         level[0] === level[level.length - 1] &&
//         isLevelSymmetric(level.slice(1, level.length - 1))
//     )
// }



function isSymmetric(root) {
  if (root === null) return true
  return helper(root.left,root.right)
}

function helper(left, right){
   if (left===null && right === null) return true
   if (left=== null || right === null)  return false 
   if (left.val!== right.val) return false 

   return helper(left.left, right.right) && helper(left.right, right.left)
} 