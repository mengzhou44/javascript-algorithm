/**
 * @param {number[][]} graph
 * @return {number}
 */

function shortestPathLength(graph) {
    let N = graph.length
    let finalState = new Array(N).fill(true)

    let array = []
    for (let i = 0; i < graph.length; i++) {
        let state = new Array(N).fill(false)
        state[i] = true
        array.push({
            node: i,
            state,
        })
    }

    let steps = 0
    let visited = []
  
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        while (count < levelSize) {
            let { node, state } = array.shift()

            let found = visited.find(
                (item) => item.node === node && item.state === state
            )

            if (found !== undefined) {
                count++
                continue
            }
            visited.push({ node, state })
            if (state === finalState) {
                return steps
            }

            for (let item of graph[node]) {
                array.push({
                    node: item,
                    state: getNewState(state, item),
                })
            }
            count++
        }
        steps++
    }
    return -1
}

function getNewState(state, item) {
    state[item] = true
    return state
}
