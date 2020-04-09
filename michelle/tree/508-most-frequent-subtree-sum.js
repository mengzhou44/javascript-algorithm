function findFrequentTreeSum(root) {
    if (root === null) return []
    let map = new Map()

    function dfs(root) {
        if (root === null) {
            return 0
        }
        if (root.left === null && root.right === null) {
            addToMap(root.val, map)
            return root.val
        }

        let sum = dfs(root.left) + dfs(root.right) + root.val
        addToMap(sum, map)
        return sum
    }

    dfs(root)

    return findFrequentSums(map)
}

function findFrequentSums(map) {
    let result = []
    let maxFrequencies = 0

    for (let [key, value] of map) {
        if (value > maxFrequencies) {
            maxFrequencies = value
            result = [key]
        } else if (value === maxFrequencies) {
            result.push(key)
        }
    }
    return result
}

function addToMap(sum, map) {
    if (!map.has(sum)) {
        map.set(sum, 1)
    } else {
        map.set(sum, map.get(sum) + 1)
    }
}
