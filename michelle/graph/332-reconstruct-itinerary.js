/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
    let map = new Map()
    let n = tickets.length + 1
    for (let ticket of tickets) {
        if (!map.has(ticket[0])) {
            map.set(ticket[0], [ticket[1]])
        } else {
            let destinations = map.get(ticket[0])
            destinations.push(ticket[1])
            destinations.sort()
        }
    }

    let path = ['JFK']

    if (dfs('JFK', path, map)) {
        return path
    }

    return []

    function dfs(current, path, map) {
        if (path.length === n) return true
        if (!map.has(current)) return false
        let destinations = map.get(current)

        if (destinations.length === 0) return false

        for (let i = 0; i < destinations.length; i++) {
            path.push(destinations[i])
            let filtered = destinations.filter((item, index) => index !== i)
            map.set(current, filtered)
            if (dfs(destinations[i], path, map)) {
                return true
            }
            map.set(current, destinations)
            path.pop()
        }

        return false
    }
}


*******

function findItinerary(tickets) {
    let map = new Map()
    for(let [from,to] of tickets) {
         if (!map.has(from)) {
             map.set(from, [to])
         } else {
             let temp = map.get(from)
             temp.push(to)
             temp.sort()
         }
    }
    let path = [] 
    
    dfs('JFK', path, map)
   
    return path
   
    function dfs(from,  path, map) {
         
         let destinations = map.get(from)  
        
         if (destinations!== undefined) {
               while(destinations.length> 0) {
                     let dest = destinations.shift()
                     dfs(dest, path, map)
              }
         }
        
         path.unshift(from)
    } 
   
}