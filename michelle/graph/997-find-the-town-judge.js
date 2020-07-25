function  findJudge(N, trust) {

  let map= new Map()
  for(i=1; i<=N; i++) {
      map.set(i, {
          i,
          trust: 0,
          trusted: 0
      })
  }
  
  for(let [a, b] of trust) {
      map.get(a).trust++
      map.get(b).trusted++
  }
  
  for (let {i, trust, trusted}  of map.values()) {
       if (trust ===0 && trusted === N-1) {
           return i
       }
  }
  return -1 
}

*********

function  findJudge(N, trust) {
    
    let array = new Array(N+1).fill(0)
    
    for(let [a,b] of trust) {
        array[a]= array[a] -1
        array[b]= array[b] + 1
    }
 
    for(let i=1; i<=array.length; i++) {
         if (array[i] === N-1)  {
             return i
         }
    }
    
    return -1
    
}