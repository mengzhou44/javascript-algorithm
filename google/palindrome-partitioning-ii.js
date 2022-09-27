   function minCut(A){
        let n = A.length
		let valid= new Array(n)
		for(let i= 0 ; i< n; i++) {
			 valid[i] =new Array(n).fill(false)
		}
		for(let i=0; i<n; i++) {
		   for(let j=i; j<n; j++) {
			    if (j === i) {
					valid[i][j] = true
				}
		   }	 
		}
		
		for(let i=0; i<n; i++) {
		   for(let j=i; j<n; j++) {
            if (j-1 >=i+1) {
               valid[i][j] = A[i] === A[j] && valid[i + 1][j - 1]; 
            }
			  
		   }	 
		}
		console.log(valid)
		
		let dp = new Array(n).fill(0)
 
		for(let i=1; i<n; i++) {
            
			if (valid[0][i]) {
				dp[i] = 0
			    continue	
			}
		 
			 for(let j=0; j<i; j++) {
				 if (valid[j+1][i]) {
					dp[i]=Math.min(dp[i], dp[j]+1)
				 }
			 }
		}
	     
		 return dp[n-1]
	}

    console.log(minCut('ababb'))