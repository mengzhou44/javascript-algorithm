const PriorityQueue = require('./priority-queue')

class Node {
    constructor(label) {
        this.label = label
        this.adjacencyList = new Map()
    }

    addEdge(to, weight) {
        this.adjacencyList.set(to, new Edge(this.label, to, weight))
    }

    removeEdge(to) {
        this.adjacencyList.delete(to)
    }

    getEdges() {
        return Array.from(this.adjacencyList.values())
    }

    toString() {
        return `${this.label}`
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from
        this.to = to
        this.weight = weight
    }

    toString() {
        return `${this.from}  ->  ${this.to}`
    }
}

class WeightedGraph {
    constructor() {
        this.map = new Map()
    }

    addNode(label) {
        this.map.set(label, new Node(label))
    }

    removeNode(label) {
        if (!this.isNodeValid(label)) return

        for (let node of this.map.values()) {
            node.removeEdge(label)
        }
        this.map.delete(label)
    }

    addEdge(from, to, weight) {
        if (!this.isNodeValid(from)) return
        if (!this.isNodeValid(to)) return

        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)

        fromNode.addEdge(to, weight)
        toNode.addEdge(from, weight)
    }

    removeEdge(from, to) {
        if (!this.isNodeValid(from)) return
        if (!this.isNodeValid(to)) return

        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)

        fromNode.removeEdge(to)
        toNode.removeEdge(from)
    }

    isNodeValid(label) {
        return this.map.has(label)
    }

    //Dijkastra algorithm

    getShortestDistance(from, to) {
        let queue = new PriorityQueue((a, b) => a.priority > b.priority)
        let distances = new Map()
        for (let node of this.map.values()) {
            distances.set(node.label, {
                distance: Number.MAX_SAFE_INTEGER,
                from: '',
            })
        }

        distances.set(from, {
            distance: 0,
            from: '',
        })

        queue.enqueue({ label: from, priority: 0 })
        let visited = new Set()
        while (!queue.isEmpty()) {
            let { label } = queue.dequeue()

            let current = this.map.get(label)
            visited.add(current.label)

            for (let edge of current.getEdges()) {
                if (visited.has(edge.to)) continue

                let newDistance = distances.get(label).distance + edge.weight

                if (newDistance < distances.get(edge.to).distance) {
                    distances.set(edge.to, {
                        distance: newDistance,
                        from: current.label,
                    })
                    queue.enqueue({ label: edge.to, priority: newDistance })
                }
            }
        }

        return distances.get(to).distance
    }

    getShortestPath(from, to) {

      let queue = new PriorityQueue((a, b) => a.priority > b.priority)
      let distances = new Map()
      for (let node of this.map.values()) {
          distances.set(node.label, {
              distance: Number.MAX_SAFE_INTEGER,
              from: '',
          })
      }

      distances.set(from, {
          distance: 0,
          from: '',
      })

      queue.enqueue({ label: from, priority: 0 })
      let visited = new Set()
      while (!queue.isEmpty()) {
          let { label } = queue.dequeue()

          let current = this.map.get(label)
          visited.add(current.label)

          for (let edge of current.getEdges()) {
              if (visited.has(edge.to)) continue

              let newDistance = distances.get(label).distance + edge.weight

              if (newDistance < distances.get(edge.to).distance) {
                  distances.set(edge.to, {
                      distance: newDistance,
                      from: current.label,
                  })
                  queue.enqueue({ label: edge.to, priority: newDistance })
              }
          }
      }
     
      let path =[to] 

       while(true) {
            let {from} = distances.get(path[0])
            if (from === '') {
              break
            }
            path.unshift(from)
       }
       return path 
    
  }

  print() {
    if (this.size() === 0) return '[]'
    for (let key of this.map.keys()) {
        const edges = this.map.get(key).getEdges().join(',')
        console.log(`Node ${key} is conneted with [${edges}]`)
    }
  }

  hasCycle(){
      
    let map = this.map
    for (let node of map.values()) {
        if (dfs(node)) {
           return true 
        }
    }
     return false 

     function dfs(current,from = '',  visited=new Set()) {
          visited.add(current.label)
         
          for(let item of current.getEdges()) {
              if (item.to === from) continue
              if (visited.has(item.to)) return true 
            
              let temp = map.get(item.to)
              if  (dfs(temp, current.label, visited)) return true 
          }
          return false 
     }
  }

  size() {
     return Array.from(this.map.values()).length
  }
  containsNode(label) {
      return this.map.has(label)
  }


  getMinimumSpanningTree() {
     let tree= new WeightedGraph()
     if (this.size() === 0)  return tree 

     let queue = new PriorityQueue((a,b)=> a.weight< b.weight)
     let nextNode = this.map.values().next().value
    
     tree.addNode(nextNode.label)
     queue.addAll(nextNode.getEdges())

     while(tree.size()< this.size()) {
          let edge = queue.dequeue()
          let nextNode = edge.to 
          if (tree.containsNode(nextNode)) continue
          tree.addNode(nextNode)
          tree.addEdge(edge.from, edge.to, edge.weight)
          queue.addAll(this.map.get(nextNode).getEdges())
     }

     return tree
   }

}




let graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')

graph.addEdge('A', 'B', 3)
graph.addEdge('A', 'D', 2)
graph.addEdge('A', 'C', 4)
graph.addEdge('C', 'D', 1)
graph.addEdge('B', 'D', 6)
graph.addEdge('D', 'E', 5)
graph.addEdge('B', 'E', 1)

console.log(graph.getShortestDistance('A', 'E'))
console.log(graph.getShortestPath('A', 'E'))

let graph2 = new WeightedGraph()
graph2.addNode('A')
graph2.addNode('B')
graph2.addNode('C')
graph2.addNode('D')

graph2.addEdge('A', 'B', 5)
graph2.addEdge('A', 'C', 3)
graph2.addEdge('C', 'D', 1)
graph2.addEdge('D', 'B', 1)

let tree = graph2.getMinimumSpanningTree()
 tree.print()


// let graph1 = new WeightedGraph()
// graph1.addNode('A')
// graph1.addNode('B')
// graph1.addNode('C')
// graph1.addEdge('A', 'B', 3)
// graph1.addEdge('A', 'C', 2)
 

// console.log(graph1.hasCycle())




