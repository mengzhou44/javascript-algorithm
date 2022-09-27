	function canCompleteCircuit(A, B){
         let n = A.length
          for(let i = 0; i<n; i++) {
               if (take(i)) {
                    return i 
               }
          }
          return -1 
          
          function take(i) {
               let amount = 0
               for(let j=i; j<n+i; j++) {
                    let k = j % n;  
                    amount+=A[k]
                    amount -= B[k]
                    if (amount <0) return false
               }
                 
                return  true
          }
	}

    console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3,4,5,1,2]));