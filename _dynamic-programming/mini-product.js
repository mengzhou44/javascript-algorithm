function miniProduct(a,b) {
      
      function helper(a,b, cache=new Map()) {

            if (cache.has(a)) {
               return cache.get(a)
            }
            if (a === 0)  return 0 
            if (a === 1)  return b 
            
            let left= Math.floor(a/2)
            let right = a-left 
            
            let temp1 = helper(left,b, cache)
             cache.set(left,temp1)

            let temp2 = helper(right,b, cache)
            cache.set(right,temp2)

             return temp1+temp2 

      } 

      return helper(a,b)
}

console.log(miniProduct(7,8))