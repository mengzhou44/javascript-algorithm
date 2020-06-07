class Node {
    constructor(val) {
        this.adjacencyList = []
        this.val = val
    }

    addEdge(node) {
        this.adjacencyList.push(node)
    }

    removeEdge(node) {
        this.adjacencyList = this.adjacencyList.filter(
            (item) => item.val !== node.val
        )
    }

    getEdges() {
        return this.adjacencyList
    }

    addAllEdges(nodes) {
        this.adjacencyList = nodes
    }
}

class Graph {
    constructor() {
        this.map = new Map()
    }

    addNode(val) {
        this.map.set(val, new Node(val))
    }

    addEdge(from, to) {
        if (!this.isValidNode(from) || !this.isValidNode(to)) {
            throw new Error('Invalid node')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.addEdge(toNode)
    }

    isValidNode(val) {
        return this.map.has(val)
    }

    print() {
        for (let node of this.map.values()) {
            let temp = node.getEdges().map((edge) => edge.val)
            console.log(`${node.val} is connected to [${temp.join(',')}]`)
        }
    }

    reverseEdges() {
        let dictionary = new Map()
        for (let node of this.map.values()) {
            for (let neighbour of node.getEdges()) {
                if (!dictionary.has(neighbour.val)) {
                    dictionary.set(neighbour.val, [node])
                } else {
                    dictionary.get(neighbour.val).push(node)
                }
            }
        }

        for (let node of this.map.values()) {
            node.addAllEdges(dictionary.get(node.val))
        }
    }
}

let graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'A')

graph.reverseEdges()
graph.print()
