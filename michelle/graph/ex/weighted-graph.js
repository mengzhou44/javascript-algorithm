class Node {
     constructor(val) {
        this.val = val,
        this.edges= []
     }
     
     addEdge(edge) {
        this.edges.push(edge)
     }

     toString() {
        return `${this.val}`
     }
}


class Edge {
    constructor(from, to, weight) {
        this.from = from 
        this.to = to 
        this.weight = weight
    }
    toString() {
       return  this.from.val +' -> ' + this.to.val
    }
}

class NodeEntry {
    constructor(node, priority) {
        this.node = node
        this.priprity = priority 
    }
}


class WeightedGraph {
    constructor() {
       this.nodes = new Map()
    }
    
    addNode(val) {
       let node = new Node(val)
       this.nodes.set(val, node)
    }
    
    addEdge(from, to, weight) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
              throw new Error('Node is invalid')
        }

        let fromNode = this.nodes.get(from)
        let toNode = this.nodes.get(to)
     
        fromNode.addEdge(new Edge(fromNode, toNode, weight))
        toNode.addEdge(new Edge(toNode, fromNode, weight))
    }

    isNodeValid(val) {
       return this.nodes.has(val)
    }

    print() {
       for(let node of this.nodes.values()) {
           console.log(`${node.val} is connected with [${node.edges.join(', ')}]`)
       } 
    }

    getShortestDistance(from, to) {
         let fromNode = this.nodes.get(from)
         let toNode = this.nodes.get(to)

         let map = new Map()
         for(let node of this.nodes.values()) {   
            map.set(node, {
               distance: Number.MAX_SAFE_INTEGER,
               parent: null
            })
         }

         map.set(fromNode, {
           distance: 0,
           parent: null
         })

         let visited = new Set()
         
         let queue = [new NodeEntry(fromNode, 0)]
         while(queue.length>0) {
            let current = queue.shift().node
            visited.add(current)
            for(let edge of current.edges) {
                 if (visited.has(edge.to)) continue

                  let distance = map.get(current).distance +edge.weight
                  if ( distance < map.get(edge.to).distance) {
                     map.set(edge.to, {distance, parent: current})
                     queue.push(new NodeEntry(edge.to, edge.weight))
                     queue.sort((a,b)=> a.priority- b.priority)
                  }
            }
         }

         return map.get(toNode).distance
     }

     getShortestPath(from, to) {
      let fromNode = this.nodes.get(from)
      let toNode = this.nodes.get(to)

      let map = new Map()
      for(let node of this.nodes.values()) {   
         map.set(node, {
            distance: Number.MAX_SAFE_INTEGER,
            parent: null
         })
      }

      map.set(fromNode, {
        distance: 0,
        parent: null
      })

      let visited = new Set()
      
      let queue = [new NodeEntry(fromNode, 0)]
      while(queue.length>0) {
         let current = queue.shift().node
         visited.add(current)
         for(let edge of current.edges) {
              if (visited.has(edge.to)) continue

               let distance = map.get(current).distance +edge.weight
               if ( distance < map.get(edge.to).distance) {
                  map.set(edge.to, {distance, parent: current})
                  queue.push(new NodeEntry(edge.to, edge.weight))
                  queue.sort((a,b)=> a.priority- b.priority)
               }
         }
      }

      let path = [to] 
      let current = toNode
      while(true) {
         current = map.get(current).parent
         if (current === null) break 
         path.unshift(current.val) 
      }
      return path
  }

   hasCycle() {
       let visited = new Set()

       for(let node of this.nodes.values()) {
           if (!visited.has(node) && dfs(node, null)) {
              return true 
           }
       }
       return false 

       function dfs(node, parent) {
          visited.add(node)

          for(let edge of  node.edges) {
              if (edge.to === parent) continue
              if (visited.has(edge.to) || 
                  dfs(edge.to, node)) {
                    return true 
                 }
          }
          return false 
       }
   }

} 


let graph1 = new WeightedGraph()
graph1.addNode('A')
graph1.addNode('B')
graph1.addNode('C')
graph1.addNode('D')
graph1.addNode('E')

graph1.addEdge('A', 'B', 3)
graph1.addEdge('A', 'D', 2)
graph1.addEdge('A', 'C', 4)
graph1.addEdge('C', 'D', 1)
graph1.addEdge('B', 'D', 6)
graph1.addEdge('D', 'E', 5)
graph1.addEdge('B', 'E', 1)

console.log(graph1.getShortestDistance('A','E'))
console.log(graph1.getShortestPath('A','E'))



let graph2 = new WeightedGraph()
graph2.addNode('A')
graph2.addNode('B')
graph2.addNode('C')
 

graph2.addEdge('A', 'B', 3)
graph2.addEdge('A', 'C', 4)
 
 
console.log(graph2.hasCycle())

