function makeChange(n, denoms) {
      denoms = denoms.sort((a,b)=>b-a)
      return makeChangeHelper(denoms, n)

      function makeChangeHelper(denoms, total, currentIndex=0, cache= new Map()) {
          if (cache.has([total,currentIndex])) {
              return  cache.get([total,currentIndex])
          

          if (currentIndex === denoms.length -1) {
               if (total %denoms[currentIndex] === 0) {
                    return 1 
               }
               return 0 
          }

          let ways=0
          let coin = denoms[currentIndex]  
          for(let i=coin; i<=total; i=i+coin){
               ways+= makeChangeHelper(denoms, total-i, currentIndex+1)
          }
          currentIndex++
          ways+= makeChangeHelper(denoms,total, currentIndex)
          cache.set([total,currentIndex], ways)
          return ways 
      }
}

let result = makeChange(25, [25, 10, 5, 1])
console.log(result)

// function makeChange(n, denoms) {
//     let map = new Array(n + 1)
//     for (let i = 0; i < n + 1; i++) {
//         map[i] = new Array(denoms.length)
//     }

//     let result = makeChangeHelper(n, denoms, 0, map)
//     return result
// }

// function makeChangeHelper(total, denoms, index, map) {
//     if (map[total][index] > 0) {
//         return map[total][index]
//     }

//     let coin = denoms[index]
//     if (index === denoms.length - 1) {
//         let remaining = total % coin
//         return remaining === 0 ? 1 : 0
//     }

//     let numberOfWays = 0
//     for (let amount = 0; amount <= total; amount += coin) {
//         numberOfWays += makeChangeHelper(total - amount, denoms, index + 1, map)
//     }
//     map[total][index] = numberOfWays

//     return numberOfWays
// }

// let result = makeChange(10, [25, 10, 5, 1])

// console.log(result)
