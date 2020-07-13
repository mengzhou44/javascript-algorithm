// function findRedundantConnection(edges) {
//     for (let i = edges.length - 1; i >= 0; i--) {
//         let edgesLeft = edges.filter((item, index) => index !== i)
//         let graph = buildGraph(edgesLeft)

//         if (isTree(graph)) {
//             return edges[i]
//         }
//     }

//     return []
// }

// function isTree(graph) {
//     let visited = new Set()
//     for (let node of graph.keys()) {
//         if (!visited.has(node) && hasCycle(node)) {
//             return false
//         }
//     }

//     return true

//     function hasCycle(current, parent = null) {
//         visited.add(current)

//         for (let item of graph.get(current)) {
//             if (item === parent) continue
//             if (visited.has(item) || hasCycle(item, current)) {
//                 return true
//             }
//         }

//         return false
//     }
// }

// function buildGraph(edges) {
//     let graph = new Map()
//     for (let [u, v] of edges) {
//         if (!graph.has(u)) {
//             graph.set(u, [])
//         }
//         if (!graph.has(v)) {
//             graph.set(v, [])
//         }
//         graph.get(u).push(v)
//         graph.get(v).push(u)
//     }

//     return graph
// }

function findRedundantConnection(edges) {
    let set = new DisjointSet(1001)
    for (let [u, v] of edges) {
        if (!set.union(u, v)) return [u, v]
    }

    return []
}

class DisjointSet {
    constructor(N) {
        this.parents = new Array(N)
        this.ranks = new Array(N).fill(0)
        for (let i = 0; i < N; i++) {
            this.parents[i] = i
        }
    }

    findRoot(x) {
        if (this.parents[x] !== x) {
            this.parents[x] = this.findRoot(this.parents[x])
        }
        return this.parents[x]
    }

    union(x, y) {
        let rx = this.findRoot(x)
        let ry = this.findRoot(y)

        if (rx === ry) return false

        if (this.ranks[rx] > this.ranks[ry]) {
            this.parents[ry] = rx
        }

        if (this.ranks[ry] > this.ranks[rx]) {
            this.parents[rx] = ry
        }

        if (this.ranks[ry] === this.ranks[rx]) {
            this.parents[ry] = rx
            this.ranks[rx] = this.ranks[rx] + 1
        }

        return true
    }
}
