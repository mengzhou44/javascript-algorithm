function absolutePath(path) {
  let array = path.split('/')
  let stack = []
  for(let item of array){
     if (item  === '..') {
        stack.pop()
     } else if (item !== '.') {
       stack.push(item)
     } 
  }
  return stack.join('/')
}

console.log(absolutePath('/Users/Joma/Documents/../Desktop/./../'))


console.log(absolutePath('/Users/Joma/Documents/../Desktop/./../'))