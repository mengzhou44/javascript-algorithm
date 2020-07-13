function base2(num) {
      
      let result = []
      while(num>0) {
        let temp = num %2
         num = Math.floor(num/2)
         result.unshift(temp) 
      }
      return result.join('')
}

console.log(base2(123))
console.log(base2(5))