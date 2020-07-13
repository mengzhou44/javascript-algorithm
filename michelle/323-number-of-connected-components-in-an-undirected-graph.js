function numOfConnectedComponents(edges) {
  let groups=[]
  for(let [node1,node2] of edges) {
        let groupFound = false 
        for(let group of groups) {
            if (group.has(node1) || group.has(node2)) {
                groupFound = true 
                group.add(node1)
                group.add(node2)
            } 
        }
        if (groupFound=== false) {
           let set = new Set()
           set.add(node1)
           set.add(node2)
           groups.push(set)
        }
  }
  return groups.length
}

console.log(numOfConnectedComponents([[1,2],[2,3],[4,1],[5,6]]))

