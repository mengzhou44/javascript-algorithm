function reverseString(s) {
    helper(s, 0, s.length - 1)
    return s
}

function helper(s, l, r) {
    if (l >= r) return

    let temp = s[l]
    s[l] = s[r]
    s[r] = temp
    l++
    r--
    helper(s, l, r)
}

*********


function reverseString(s) {
  if (s.length <2)  return s
  let count = Math.floor(s.length/2)
  let index= 0 
  while(index<count) {
      let temp = s[index]
      s[index] = s[s.length-1-index]
      s[s.length-1-index] = temp
      index++
  }
  
}