function reverseWords(s) {
  let array = s.trim().split(" ")
  let result = []
  for(let item of array) {
      let temp = item.trim()
      if (temp !== '') {
           result.unshift(temp)
      }
  }

  return result.join(" ")
};