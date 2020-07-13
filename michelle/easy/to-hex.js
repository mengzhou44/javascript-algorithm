// Given a non-negative integer n, convert the integer to hexadecimal 
//and return the result as a string. Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF. Do not use any builtin base conversion functions like hex.

// Here's an example and some starter code.

// def to_hex(n):
//   # Fill this in.
  
// print(to_hex(123))
// # 7B

function toHex(num){
    let map= new Map()
    map.set(10,'A')
    map.set(11,'B')
    map.set(12,'C')
    map.set(13,'D')
    map.set(14,'E')
    map.set(15,'F')
     
    let result = []
    while(num>0) {
          let temp = num%16
           if (temp<10) {
              result.unshift(temp.toString())
           } else {
              result.unshift(map.get(temp))
           }
           num = Math.floor(num /16)
    }

    return result.join('')
  
}

console.log(toHex(123))
console.log(toHex(4567))