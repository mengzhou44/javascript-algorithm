function shortestReach(n, edges,  start) {
     let graph = new Map()
      for(let i=1 ;i<=n; i++) {
           graph.set(i, [])
      }

      for(let [from, to] of edges) {
         graph.get(from).push(to)
      }

      let arr= [start]

      let distances = new Array(n+1).fill(-1)
      distances[start] = 0 
      while(arr.length>0) {
         let node = arr.shift()
         for(let nei of graph.get(node)) {
             if (distances[nei] === -1) {
                 distances[nei] = distances[node]+1 
                 arr.push(nei)
             }
         }
      }
      return distances
}
 
 