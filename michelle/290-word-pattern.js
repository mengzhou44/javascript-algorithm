function wordPattern(pattern, str) {
    let array = str.split(' ')

    if (pattern.length !== array.length) return false

    let map = {}
    for (let i = 0; i < array.length; i++) {
        const word = array[i]
        const p = pattern[i]
        if (map[p] === undefined) {
            map[p] = word
        } else if (map[p] !== word) {
            return false
        }
        for (let key of Object.keys(map)) {
            if (map[key] === word && key !== p) {
                return false
            }
        }
    }
    return true
}


 

function wordPattern(pattern, str) {
  let array = str.split(' ')

  if (pattern.length !== array.length) return false

  let patternMap = {}
  let wordMap ={}
  for (let i = 0; i < array.length; i++) {
      const word = array[i]
      const p = pattern[i]
      
      if (wordMap[word]  && wordMap[word] !==p) {
          return false 
      }
      
      if ( patternMap[p] === undefined) {
           patternMap[p] = word
           wordMap[word] =p
      } else if (patternMap[p] !== word) {
          return false
      } 
  }
  return true
}

