function minMutation(start, end, bank) {
    let result = Number.MAX_SAFE_INTEGER
    dfs(start)
    if (result === Number.MAX_SAFE_INTEGER) return -1
    return result

    function dfs(current, mutations = 0, visited = []) {
        visited.push(current)

        if (current === end) {
            result = Math.min(result, mutations)
            return
        }

        let options = bank.filter(
            (item) => canMutate(item, current) && !visited.includes(item)
        )
        if (options.length === 0) {
            return
        }
        mutations++
        for (let option of options) {
            dfs(option, mutations, [...visited])
        }
    }
}

function canMutate(str1, str2) {
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++
        }
    }
    return count === 1
}
