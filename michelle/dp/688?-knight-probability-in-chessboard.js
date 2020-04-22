function  knightProbability(N, K, r, c) {
    
 
  let success = 0    
  function dfs(N, K,r,c) {
      console.log(N,K,r,c)
      if (r<0 || r>N-1 || c<0 || c>N-1) {
             return 
      }
        
      if (K===0) {
          success++
          return
      }
            
       dfs(N, K-1, r-1,c-2)
       dfs(N, K-1, r+1,c-2)
       dfs(N, K-1, r-2,c-1)
       dfs(N, K-1, r+2,c-1)
      
       dfs(N, K-1, r-2,c+1)
       dfs(N, K-1, r-1,c+2)
      
       dfs(N, K-1, r+2,c+1)
       dfs(N, K-1, r+1,c+2)
       
       return 
  }
  
  dfs(N, K,r,c)
  return success / Math.pow(8,K)   
}