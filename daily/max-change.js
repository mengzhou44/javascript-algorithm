// def max_change(mat):
//   # Fill this in.
// print(max_change(mat))
// # 13


function maxChange(mat){
  let result = 0
  function dfs(row, col, path=[]) {
 
       if (row>mat.length-1 || row<0) return 
       if (col>mat[0].length-1 || col<0) return 
       
       path.push(mat[row][col])
       if (row === mat.length-1 && col === mat[0].length -1) {
           result = Math.max(result, path.reduce((sum,item)=> sum+item))
           return 
       }
      
       dfs(row+1, col, [...path])
       dfs(row, col+1, [...path])
  }
  dfs(0,0)
  return  result 
}

let mat = [
  [0, 3, 0, 2],
  [1, 2, 3, 3],
  [6, 0, 3, 2]
]

console.log(maxChange(mat))