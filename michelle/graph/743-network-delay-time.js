function networkDelayTime(times, N, K) {
    let timesTable = new Map()
    for (let i = 1; i <= N; i++) {
        timesTable.set(i, { time: Number.MAX_SAFE_INTEGER, parent: null })
    }

    timesTable.set(K, { time: 0, parent: null })

    let visited = new Set()
    let queue = [{ node: K, priority: 0 }]

    while (queue.length > 0) {
        let current = queue.shift().node
        visited.add(current)

        for (let [from, to, time] of times) {
            if (from === current) {
                let temp = timesTable.get(current).time + time
                if (temp < timesTable.get(to).time) {
                    timesTable.set(to, { time: temp, parent: current })
                    queue.push({ node: to, prioity: temp })
                    queue.sort((a, b) => a.priority - b.priority)
                }
            }
        }
    }

    let result = -1
    for (let { time } of timesTable.values()) {
        result = Math.max(result, time)
    }
    if (result === Number.MAX_SAFE_INTEGER) return -1

    return result
}
