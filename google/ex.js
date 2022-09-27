	function majorityElement(A){
        if (A.length === 1) return A[0]
        let res= A[0]
        for(let i=1; i<A.length; i++) {
             if (A[i]!== res) {
                  res= A[i]
             }
        }
        return res 
	}

    console.log(majorityElement([1,2,2]))