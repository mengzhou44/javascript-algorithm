function calcEquation(equations, values, queries) {
    let temp = []
    equations.map(([a, b], index) => {
        temp.push([a, b, values[index]])
        temp.push([b, a, 1 / values[index]])
    })

    let map = {}
    for (let [a, b, value] of temp) {
        if (map[a] === undefined) {
            map[a] = [{ variable: b, value }]
        } else {
            map[a].push({ variable: b, value })
        }
    }

    let result = []
    for (let query of queries) {
        result.push(calculate(map, query))
    }
    return result
}

function calculate(map, query) {
    if (map[query[0]] === undefined) {
        return -1
    }
    if (query[0] === query[1]) return 1.0

    let result = 1
    let path = [query[0]]
    return dfs(map, query, result, path)
}

function dfs(map, query, result, path) {
    if (map[query[0]] === undefined) {
        return -1
    }

    for (let { variable, value } of map[query[0]]) {
        if (variable === query[1]) {
            return result * value
        } else {
            if (!path.includes(variable)) {
                path.push(variable)
                let temp = dfs(map, [variable, query[1]], result * value, path)
                if (temp !== -1) {
                    return temp
                }
                path.pop()
            }
        }
    }

    return -1
}
