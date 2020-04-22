function isBipartite(graph) {
    let n = graph.length
    let colors = new Array(n).fill(0)
    let color = 1
    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === 0 && !dfs(i, color, colors, graph)) return false
    }

    return true
}

function dfs(node, color, colors, graph) {
    if (colors[node] !== 0) {
        return colors[node] === color
    }

    colors[node] = color

    for (let item of graph[node]) {
        if (!dfs(item, color * -1, colors, graph)) {
            return false
        }
    }

    return true
}
