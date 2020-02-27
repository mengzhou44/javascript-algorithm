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

console.log(isPalindrome(121))

console.log(isPalindrome(123))