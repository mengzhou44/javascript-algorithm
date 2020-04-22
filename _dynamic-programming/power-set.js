function getPowerSet(n) {
    if (n === 0) return [[]]
    if (n ===1) return  [[], [1]]
    let previous = getPowerSet(n-1)
  
     let result = []
     for(let item of previous) {
        result.push([...item])
     }
    
     for(let i=0; i<previous.length; i++) {
          previous[i].push(n)
          result.push(previous[i])
     }
     return result
}

console.log(getPowerSet(5))
 