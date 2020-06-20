function squareroot(num){
     let left = 1
     let right = num

     while(left<=right) {
         let mid =  (left+right) /2
          let value  = mid * mid 
         if (Math.abs(value-num)<=0.001) {
              return mid.toFixed(3)
         } else if (value> num) {
             right = mid-0.001
         } else {
            left = mid +0.001
         }
     }
     return left.toFixed(3) 
}

console.log(squareroot(5))