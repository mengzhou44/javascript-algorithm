function judgeSquareSum(c) {
    let num = getSquareRoot(c)
    let left = 0
    let right = num
    while (left <= right) {
        let sum = left * left + right * right
        if (sum === c) {
            return true
        } else if (sum < c) {
            left++
        } else {
            right--
        }
    }
    return false
}

function getSquareRoot(c) {
    let left = 1
    let right = c
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid > c) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
}


***********
function judgeSquareSum(c) {
  for(let i=0; i*i <=c; i++) {
       let b = c-i*i
       if (isSquare(b)) return true 
  }   
 
  return false 
}

function isSquare(num) {
   let l = 0
   let r = num
   
   while(l<=r) {
        let m = Math.floor((l+r)/2)
        if (m*m === num) {
            return true  
        } else  if (m*m  > num) {
             r= m-1
        } else {
            l = m+1
        }
   }
 
   return false 
}
