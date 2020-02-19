class Node {
    constructor(name) {
        this.name = name
        this.adjacents = []
    }

    addAdjacent(node) {
        this.adjacents.push(node)
    }
}

function dfsSearch(start, end) {
    let visited = []
    let visitList = [start]
    while (visitList.length > 0) {
        let node = visitList.shift()
        if (!visited.includes(node)) {
            visited.push(node)
            if (node === end) {
                return true
            }
            if (node.adjacents.length > 0) {
                visitList.unshift(...node.adjacents)
            }
        }
    }

    return false
}

function bfsSearch(start, end) {
    let visited = []
    let visitList = [start, 's']
    let depth = 0
    while (visitList.length > 1) {
        let node = visitList.shift()
        if (node === 's') {
            depth++
            visitList.push('s')
            continue
        }
        if (!visited.includes(node)) {
            visited.push(node)
            if (node === end) {
                return depth
            }
            if (node.adjacents.length > 0) {
                visitList.push(...node.adjacents)
            }
        }
    }

    return depth
}

let startNode = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let endNode = new Node(5)

startNode.addAdjacent(node2)
startNode.addAdjacent(node3)
node2.addAdjacent(node3)
node3.addAdjacent(node4)
node4.addAdjacent(endNode)

console.log(dfsSearch(startNode, endNode))
console.log(bfsSearch(startNode, endNode))
