function networkDelayTime(times, N, K) {
    let graph = new Map()
    for (let i = 1; i <= N; i++) {
        graph.set(i, [])
    }
    for (let [u, v, time] of times) {
        let list = graph.get(u)
        list.push([v, time])
        list = list.sort((a, b) => a[1] - b[1])
    }

    const INF = Number.MAX_SAFE_INTEGER
    let travelTimeList = new Array(N).fill(INF)

    function dfs(node, timeSpent) {
        let index = node - 1
        if (timeSpent >= travelTimeList[index]) {
            return
        }
        travelTimeList[index] = timeSpent
        for (let [next, time] of graph.get(node)) {
            dfs(next, timeSpent + time)
        }
    }

    dfs(K, 0)

    let result = travelTimeList[0]
    for (let item of travelTimeList) {
        result = Math.max(result, item)
    }

    if (result === INF) return -1
    return result
}
