class Node {
    constructor(val) {
        this.val = val
        this.adjacencyList = []
    }

    addEdge(node) {
        this.adjacencyList.push(node)
    }

    toString() {
        return this.val
    }
}

class Graph {
    constructor() {
        this.nodes = new Map()
    }

    addNode(val) {
        this.nodes.set(val, new Node(val))
    }

    addEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }

        let fromNode = this.nodes.get(from)
        let toNode = this.nodes.get(to)
        fromNode.addEdge(toNode)
    }

    print() {
        for (let node of this.nodes.values()) {
            let neighbors = node.adjacencyList
                .map((node) => node.val)
                .join(', ')
            console.log(`Node ${node} is  connected with [${neighbors}]`)
        }
    }

    isNodeValid(val) {
        return this.nodes.has(val)
    }

    traverseDFS1(val) {
        let visited = new Set()
        let array = []
        let node = this.nodes.get(val)
        dfs(node)

        return array

        function dfs(node) {
            if (visited.has(node)) {
                return
            }
            visited.add(node)
            array.push(node.val)
            for (let item of node.adjacencyList) {
                dfs(item)
            }
        }
    }

    traverseDFS2(val) {
        let visited = new Set()
        let result = []
        let node = this.nodes.get(val)

        let array = [node]
        while (array.length > 0) {
            let node = array.pop()
            visited.add(node)
            result.push(node.val)
            for (let item of node.adjacencyList) {
                if (!visited.has(item)) {
                    array.push(item)
                }
            }
        }

        return result
    }

    traverseBFS(val) {
        let visited = new Set()
        let result = []
        let node = this.nodes.get(val)

        let array = [node]
        while (array.length > 0) {
            let node = array.shift()
            if (!visited.has(node)) {
                visited.add(node)
                result.push(node.val)
            }

            for (let item of node.adjacencyList) {
                if (!visited.has(item)) {
                    array.push(item)
                }
            }
        }

        return result
    }

    topologicalSort() {
         let visited = new Set()
         let sorted =[] 

         for(let node of this.nodes.values()) {
            if (!visited.has(node)) {
               dfs(node)
            }
         }
        return sorted 

        function dfs(node) {
            visited.add(node)
            for(let item of node.adjacencyList) {
               if (!visited.has(item)) {
                  dfs(item)
               }
            }
            sorted.unshift(node.val)
        }
    }

    hasCycle() {
       let all = new Set()
       for(let node of this.nodes.values()) {
          all.add(node)
       }
      while(all.size >0) {
         let node = Array.from(all)[0]
         if  (helper(node)) {
            return true 
         }
      }
      return false 

      function helper(node, visiting=new Set(), visited= new Set()) {
            visiting.add(node)
            all.delete(node)

            for(let item of node.adjacencyList) {
                if (visited.has(item)) continue 
                if (visiting.has(item) || helper(item, visiting, visited)) {
                   return true 
                }
            }
            visiting.delete(node)
            visited.add(node)
            return false 
      }
    }
}

let graph = new Graph()
graph.addNode('X')
graph.addNode('A')
graph.addNode('B')
graph.addNode('P')

graph.addEdge('X', 'A')
graph.addEdge('X', 'B')
graph.addEdge('A', 'P')
graph.addEdge('B', 'P')

graph.print()
console.log(graph.traverseDFS1('X'))
console.log(graph.traverseDFS2('X'))
console.log(graph.traverseBFS('X'))
console.log(graph.topologicalSort())


let graph1 = new Graph()
 
graph1.addNode('A')
graph1.addNode('B')
graph1.addNode('C')

graph1.addEdge('A', 'B')
graph1.addEdge('B', 'C')
graph1.addEdge('C', 'A')
 
console.log(graph1.hasCycle())

