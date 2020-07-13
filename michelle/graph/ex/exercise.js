class Node {
    constructor(val) {
        this.val = val
        this.adjacencyList = []
    }

    addEdge(node) {
        this.adjacencyList.push(node)
    }
    removeEdge(node) {
        this.adjacencyList = this.adjacencyList.filter((item) => item !== node)
    }
}

class Graph {
    constructor() {
        this.map = new Map()
    }

    addNode(val) {
        this.map.set(val, new Node(val))
    }

    removeNode(val) {
        let nodeToRemove = this.map.get(val)
        this.map.delete(val)
        for (let node of this.map.values()) {
            node.removeEdge(nodeToRemove)
        }
    }

    addEdge(from, to) {
        if (this.isNodeValid(from) && this.isNodeValid(to)) {
            let fromNode = this.map.get(from)
            let toNode = this.map.get(to)
            fromNode.addEdge(toNode)
        }
    }

    removeEdge(from, to) {
        if (this.isNodeValid(from) && this.isNodeValid(to)) {
            let fromNode = this.map.get(from)
            let toNode = this.map.get(to)
            fromNode.removeEdge(toNode)
        }
    }

    isNodeValid(val) {
        return this.map.has(val)
    }

    print() {
        for (let key of this.map.keys()) {
            let node = this.map.get(key)
            let neighbors = node.adjacencyList.map((item) => item.val).join(',')
            console.log(`Node ${key} is contected with  [${neighbors}]`)
        }
    }

    traverseDFS(val) {
        let result = []
        let visited = new Set()
        dfs(this.map.get(val))
        console.log(result)
        function dfs(node) {  
            result.push(node.val)  
            visited.add(node) 
            for (let item of node.adjacencyList) {
               if (!visited.has(item)) {
                   dfs(item)
               }
            }
        }
    }

     traverseDFS1(val) {
        let result = []
        let visited = new Set()
        let stack = [this.map.get(val)]
   
        while(stack.length>0) {
            let node = stack.pop()
            result.push(node.val)
            visited.add(node)
            for(let item of node.adjacencyList) {
               if (!visited.has(item)) {
                   stack.push(item)
               }
            }
       }
       console.log(result)
    }

    traverseBFS(val) {
       let node = this.map.get(val)
       let array = [node]
       let visited = new Set() 
       while(array.length>0) {
           let levelSize = array.length
           let count = 0 
           while(count<levelSize) {
              let cur = array.shift()
              visited.add(cur)
              for(let item of cur.adjacencyList)  {
                   if (!visited.has(item)) {
                       array.push(item)
                   }
              }  
              count++
           }
       }
       console.log(Array.from(visited).map(item=>item.val))
    }
   
    topologicalSort() {

        let visited = new Set()
        let result =[]
        for(let node of this.map.values()) {
            dfs(node)
        } 
        console.log(result)
        function dfs(node) {
           if (visited.has(node)) return 
           visited.add(node)
         
           for(let item of node.adjacencyList) {
                 dfs(item)
           }
           result.unshift(node.val)
        }
    }

    hasCycle() {
       let all = new Set()
       for (let node of this.map.values()) {
           all.add(node)
       }
       while(all.size> 0) {
           let node = Array.from(all)[0]
           if  (dfs(node)) {
               return true 
           }
      }
      return false  

      function  dfs(node, visiting= new Set(), visited = new Set()) {
          all.delete(node)
          visiting.add(node)

          for(let item of node.adjacencyList) {
               if (visited.has(item)) {
                   continue
               }
               if (visiting.has(item)) {
                   return true 
               }
               if (dfs(item, visiting, visited)) return true 
          }
          visiting.delete(node)
          visited.add(node)
          return false 
      }
    }

}

let graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addEdge('A', 'B')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
graph.addEdge('A', 'C')
 

graph.print()
console.log('DFS')
graph.traverseDFS('A')
console.log('DFS1')
graph.traverseDFS1('A')
console.log('BFS')
graph.traverseBFS('A')


let graph1 = new Graph()
graph1.addNode('X')
graph1.addNode('A')
graph1.addNode('B')
graph1.addNode('P')

graph1.addEdge('X', 'A')
graph1.addEdge('X', 'B')
graph1.addEdge('A', 'P')
graph1.addEdge('B', 'P')

graph1.topologicalSort()

console.log("hasCycle", graph1.hasCycle())

let graph2 = new Graph()
 
graph2.addNode('A')
graph2.addNode('B')
graph2.addNode('C')
graph2.addEdge('A', 'B')
graph2.addEdge('B', 'C')
graph2.addEdge('C', 'A')
console.log("hasCycle", graph2.hasCycle())
