let map = new Map()
map.set('123', 'Smith')
map.set(null, null)

console.log(map.get(null))
console.log(map.has(null))

map.delete(null)
console.log(map.has(null))

function firstNonRepeat(str) {
     let map = new Map()
     for(let c of str) {
        if (c === ' ') continue
        if(!map.has(c)) {
            map.set(c, 0)
        }
        map.set(c, map.get(c)+1)
     }
     for (let c of str) {
        if (map.get(c) ===1) {
            return c 
        }
     }
     throw new Error ('no such letter!')
}

console.log(firstNonRepeat('a green apple'))


function firstRepeat(str) {
   let set = new Set()
   for(let c of str) {
      if (c === ' ') continue
      if (set.has(c)) {
         return c 
      }
      set.add(c)
   }
   throw new Error ('no such letter!')
}

console.log(firstRepeat('green apple'))
