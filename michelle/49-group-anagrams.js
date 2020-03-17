function groupAnagrams(strs) {
    let map = {}

    for (let word of strs) {
        let pattern = word
            .split('')
            .sort()
            .join('')
        if (map[pattern] === undefined) {
            map[pattern] = [word]
        } else {
            map[pattern].push(word)
        }
    }

    let result = []
    for (let item of Object.values(map)) {
        result.push(item)
    }

    return result
}
