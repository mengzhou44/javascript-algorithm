function countBits(num) {
  let array=[]
  for(let i=0; i<=num; i++) {
      array.push(helper(i))
  }
  return array 
  
  function helper(n) {
       let result = 0 
       while(n>0){
            if ( n%2 === 1) {
                result=result+1
            }
           n = Math.floor(n/2)
       }

       return result 
  }
}