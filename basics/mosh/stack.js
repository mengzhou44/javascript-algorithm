function reverseString(s)  {
  let left= 0
  let right = s.length-1 
  let array = s.split('')
  while(left<right) {
      let temp = array[left]
      array[left] = s[right]
      array[right] = temp
     
      left++
      right--
      
  }
  
  return array.join('')
}

function reverseString1(s)  {
     let stack = [] 
     let array = s.split('')
     while(array.length>0) {
        stack.push(array.shift())
     }
    let result =[] 
    while(stack.length>0) {
       result.push(stack.pop())
    }
    return result.join('')
}

let str='hello world!'
console.log(reverseString(str))
console.log(reverseString1(str))


function isBalanced(str) {
    let array= str.split('')
    let stack = []
    for(let i=0; i<array.length; i++){
       if (isOpenSymbol(array[i])) {
          stack.push(array[i])
       }else  if (isCloseSymbol(array[i])) {
            if (stack.length=== 0) return false 
            let open = stack.pop()

            if (!isMatch(open, array[i])) return false 
       }
    }

    return stack.length === 0  
}

function isOpenSymbol(c) {
   return c === '(' || 
          c === '[' ||
          c === '{' ||
          c === '<'
 }

 function isCloseSymbol(c) {
  return c === ')' || 
         c === ']' ||
         c === '}' ||
         c === '>'
}

function isMatch(open,close) {
  return (open === '(' && close === ')') ||
         (open === '[' && close === ']') ||
         (open === '{' && close === '}') ||
         (open === '<' && close === '>')
}

console.log(isBalanced("(3+3+(5+7)"))


console.log(isBalanced("(3+<3>+([25+7))"))