/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
function criticalConnections(n, connections) {
     let graph = buildGraph()
     let result = [] 

     let visitedTimes = new Array(n).fill(0)
     let lowTimes =  new Array(n).fill(0)
     let visited = new Array(n).fill(false)
     let time= 0 
     dfs(0, -1)
      
     function dfs(current, parent) {
         visited[current] = true 
         visitedTimes[current] = lowTimes[current] = time++
        
         for(let neighbor of graph[current]) {
              if (neighbor === parent)  continue 
              if (!visited[neighbor]) {
                  dfs(neighbor,current)
              }
         }

     }
     function buildGraph() {
         let graph  =new Array(n)
         for(let i=0; i<graph.length; i++) {
              graph[i] = []
         }
         for(let [a,b] of connections) {
              graph[a].push(b)
              graph[b].push(a)
         }
         return graph
     }
    
}