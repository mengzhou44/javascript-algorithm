class Node {
    constructor(val) {
        this.val = val
        this.edges = []
    }

    addEdge(edge) {
        this.edges.push(edge)
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from
        this.to = to
        this.weight = weight
    }
}

class WeightedGraph {
    constructor() {
        this.nodes = new Map()
    }

    addNode(val) {
        this.nodes.set(val, new Node(val))
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

    getShortestPath(from, to) {
        let fromNode = this.nodes.get(from)

        let visited = new Set()
        let map = new Map()
        for (let node of this.nodes.values()) {
            map.set(node, {
                distance: Number.MAX_SAFE_INTEGER,
                parent: null,
            })
        }
        map.set(fromNode, { distance: 0, parent: null })
        
        let queue = [{ node: fromNode, priority: 0 }]
        while (queue.length > 0) {
            let nodeEntry = queue.shift()
            let currentNode = nodeEntry.node
            
            visited.add(currentNode)

            for (let edge of currentNode.edges) {
                if (visited.has(edge.to)) continue
                let distance =  map.get(currentNode).distance+ edge.weight
          
                if (distance < map.get(edge.to).distance) {
                    map.set(edge.to, { distance, parent: currentNode })
                    queue.push({ node: edge.to, priority: edge.weight })
                    queue.sort((a, b) => a.priority - b.priority)
                }
            }
        }
       
        let temp= this.nodes.get(to)
        let path = [to]
        while (true) {
            temp = map.get(temp).parent
            if (temp !== null) {
                path.unshift(temp.val)
            } else {
                break
            }
        }
        return path
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

console.log(graph1.getShortestPath('A', 'E'))
