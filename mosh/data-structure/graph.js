class Node {
     
     constructor(label) {
         this.label = label,
         this.adjacencyList= []
     }

     addEdge(node) {
        this.adjacencyList.push(node)
     }

    removeEdge(node) {
       this.adjacencyList = this.adjacencyList.filter(edge!== node)
    }

     toString() {
        return this.label
     }
}


class Graph {
  
     constructor() {
        this.map= new Map()
     }

     addNode(label) {
        this.map.set(label, new Node(label))
     }

     removeNode(label) {
        let nodes = this.map.values()
        for (let node of nodes) {
            node.edges= node.edges.filter(edge=> edge!== label)
        }
        this.map.delete(label)
     }

     addEdge(from, to) {
         if (this.isNodeValid(from) && 
             this.isNodeValid(to))  {
              this.map.get(from).addEdge(to)
         }
     }

     removeEdge(from, to) {
      if (this.isNodeValid(from) && 
          this.isNodeValid(to))  {
           this.map.get(from).removeEdge(to)
      }
    }

     isNodeValid(label){
        return this.map.has(label)
     }
    
     traverseDFS() {
    
        let map = this.map
        let visited= new Set()
        for(let node of map.values()) {
             dfs(node)
        }
       
        function dfs(node) {
            if (visited.has(node.label)) return 
            visited.add(node.label)
            console.log(node.label)
            for(let item of node.adjacencyList){
                 dfs(map.get(item))
            }
        }
     }


     traverseDFS1() {
    
      let map = this.map
      let visited= new Set()
      for(let node of map.values()) {
           dfs(node)
      }
     
      function dfs(node) {
          let array =[node]
          while(array.length>0) {
               let item = array.shift()
               if (visited.has(item.label)) continue
               visited.add(item.label)   
               console.log(item.label)
               for(let i of
                   item.adjacencyList) {
                     array.unshift(map.get(i))
               }
          }
      }
   }


   traverseBFS() {
    
      let map = this.map
      let visited= new Set()
      for(let node of map.values()) {
           bfs(node)
      }
     
      function bfs(node) {
          let array =[node]
          while(array.length>0) {
               let item = array.shift()
               if (visited.has(item.label)) continue
               visited.add(item.label)   
               console.log(item.label)
               for(let i of
                   item.adjacencyList) {
                     array.push(map.get(i))
               }
          }
      }
   }

   topologicalSort() {

      let map = this.map
      let visited= new Set() 
      let result =[]
      for(let node of map.values()) {
           dfs(node)
      }
      return  result
     
      function dfs(node) {
          if (visited.has(node.label)) return 
          visited.add(node.label)
          for(let item of node.adjacencyList){
               dfs(map.get(item))
          }
          result.unshift(node.label)
      }
   }

   

   print() {
        for(let node of this.map.keys()) {
           const adjacencyList = this.map.get(node).adjacencyList
           console.log(`${node} is conected with [${adjacencyList.join(', ')}]`)
        }
     }
}


const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
 

graph.addEdge('A', 'B')
graph.addEdge('B', 'D')
graph.addEdge('D', 'C')
graph.addEdge('A', 'C')


 
graph.traverseDFS1()
graph.traverseBFS()



const graph2 = new Graph()

graph2.addNode('X')
graph2.addNode('A')
graph2.addNode('B')
graph2.addNode('P')
 

graph2.addEdge('X', 'A')
graph2.addEdge('X', 'B')
graph2.addEdge('A', 'P')
graph2.addEdge('B', 'P')

console.log(graph2.topologicalSort())