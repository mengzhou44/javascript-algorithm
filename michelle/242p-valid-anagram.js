var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let map = {}
    for (let c of s) {
        if (map[c] === undefined) {
            map[c] = 1
        } else {
            map[c] = map[c] + 1
        }
    }

    for (let c of t) {
        if (map[c] === undefined) {
            return false
        } else {
            map[c] = map[c] - 1
            if (map[c] === 0) {
                delete map[c]
            }
        }
    }

    return Object.keys(map).length === 0
}
