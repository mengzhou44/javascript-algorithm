function findItinerary(tickets) {
    let map = {}
    let n = tickets.length + 1
    for (const [from, to] of tickets) {
        if (map[from] === undefined) {
            map[from] = [to]
        } else {
            let list = map[from]
            list.push(to)
            map[from] = list
        }
    }

    Object.values(map).map((list) => list.sort())

    let result = ['JFK']
    if (dfs(result, map, n, 'JFK')) {
        return result
    }

    return []
}

function dfs(result, map, n, start) {
    if (result.length === n) return true
    if (map[start] === undefined) return false
    const cloned = [...map[start]]

    for (let i = 0; i < map[start].length; i++) {
        const des = map[start][i]

        result.push(des)
        map[start] = removeElement(map[start], i)

        if (dfs(result, map, n, des)) {
            return true
        }
        result.pop()
        map[start] = cloned
    }

    return false
}

function removeElement(array, index) {
    let result = []
    for (i = 0; i < array.length; i++) {
        if (i !== index) {
            result.push(array[i])
        }
    }
    return result
}
