/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(grid) {
  let m = grid.length
  let n = grid[0].length
  
  let dp = new Array(m).fill([])
  dp = dp.map( item => new Array(n).fill(0))
   
  for(let i=0; i<m; i++) {
      if (i===0) {
          dp[i][0]= grid[i][0]===1? 0 : 1
      } else {
           dp[i][0]= grid[i][0]===1? 0 : dp[i-1][0]
      }
    
  }
  for(let j=0; j<n; j++) {
     if (j===0) {
          dp[0][j]= grid[0][0]===1? 0 : 1
      } else {
           dp[0][j]= grid[0][j]===1? 0 : dp[0][j-1]
      }
  }
   
  for(let i=1; i<m; i++) {
      for(let j=1; j<n; j++) {
          if (grid[i][j] ===1) {
               dp[i][j]=0
          } else {
               dp[i][j] = dp[i-1][j]+dp[i][j-1]
          }
      }
  }
  return dp[m-1][n-1]
}