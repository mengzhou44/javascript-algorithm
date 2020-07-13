/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

function calcEquation(equations, values, queries) {
    let map = new Map()
    let index = 0
    for (let [a, b] of equations) {
        let edges1 = getEdges(map, a)
        edges1.push({ from: a, to: b, weight: values[index] })

        let edges2 = getEdges(map, b)
        edges2.push({ from: b, to: a, weight: 1 / values[index] })

        index++
    }

    let result = []
    for (let [a, b] of queries) {
        result.push(dfs(a, b))
    }
    return result

    function dfs(a, b, visited = new Set()) {
        if (!map.has(a) || !map.has(b)) {
            return -1
        }
        if (visited.has(a)) {
            return -1
        }
        visited.add(a)
        if (a === b) {
            return 1
        }
        let edges = getEdges(map, a)

        for (let { to, weight } of edges) {
            if (!visited.has(to)) {
                let temp = dfs(to, b, visited)
                if (temp !== -1) {
                    return weight * temp
                }
            }
        }
        return -1
    }
}

function getEdges(map, node) {
    if (!map.has(node)) {
        map.set(node, [])
    }
    return map.get(node)
}
