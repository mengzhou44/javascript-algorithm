function isPalindrome(num) {
      if (num<0) return false 
       let x= num 
       let cur =0
       while(x>0) {
            cur=10*cur + x%10
            x= Math.floor(x/10)
       }

       return cur === num 
}

function isPalindrome(x) {
     if (x<0) return false 
    
     let value=0
     let temp = x
     while(temp>0) {
         value= 10*value+ temp%10
         temp= Math.floor(temp/10)
     } 
    
     return value === x    
}

console.log(isPalindrome(121))

console.log(isPalindrome(123))