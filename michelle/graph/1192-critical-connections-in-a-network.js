function  criticalConnections(n, connections) {
  let result = []
  
  for(let connection of connections) {
      let other= connections.filter(i=> i!== connection )
      let visited = new Array(n).fill(false)
      if (!bfs(other, visited)) {
          result.push(connection) 
      }
  }
  
  return result 
}

function bfs(connections, visited, current=0) {
  
  let notVisited = visited.filter(item=> item === false)
  if (notVisited.length ===0) {
      return  true 
  }
  
   let neighbours = connections.filter(([a,b])=> a===current || b=== current)
   if (neighbours.length === 0) {
       return false
   }
   
   for (let [a,b] of neighbours) {
       visited[a]= true
       visited[b] =true
   }
   connections = connections.filter(item=> !neighbours.includes(item))
   for(let item of neighbours) {
       let next = item[0]
       if (item[0] === current) {
           next = item[1]
       }
       if (bfs(connections,visited, next)) {
           return true
       }
   }
  
   return false 

}