/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let arr = []
  for (let i=0; i<n; i++) {
      arr.push([])
      for (let j=0; j<m; j++) {
           arr[i][j]=0;
      }
  }
 
 for(let pair of indices) {
      let [row, column] = pair
      addOneToRow(arr, row, m)
      addOneToColumn(arr, column, n)
 }
 
 let result = 0
 for (let i=0; i<n; i++) {
      for (let j=0; j<m; j++) {
           if (arr[i][j] === 1) {
                result++
           }
      }
  }
 
 return result
};

function addOneToRow(arr, row, m) {
 for(let j=0; j<m; j++) {
     arr[row][j]= arr[row][j]^1
 }
}

function addOneToColumn(arr, column, n) {
 for(let j=0; j<n; j++) {
     arr[j][column]= arr[j][column]^1
 }
}