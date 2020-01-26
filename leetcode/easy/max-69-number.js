// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).


function maximum69Number(num) {
  let temp = num.toString().split("")
  let output=[]
  let foundFirst6 = false; 
  while(temp.length>0) {
      let letter= temp.shift()
      if (letter === '6' && foundFirst6 ===false) {
           output.push('9')
           foundFirst6 = true 
      }else {
           output.push(letter)
      }
  }
 return  parseInt(output.join(""))

}