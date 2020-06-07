function groupAnagrams(strs) {
    let map = new Map()

    for (let word of strs) {
        let pattern = word
            .split('')
            .sort()
            .join('')
        if (!map.has(pattern)) {
            map.set(pattern, [word])
        } else {
            map.get(pattern).push(word)
        }
    }

    let result = []
    for (let item of map.values()) {
        result.push(item)
    }

    return result
}
