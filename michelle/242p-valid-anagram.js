var isAnagram = function (s, t) {
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

function isAnagram(s, t) {
    if (s.length !== t.length) return false

    let array1 = s.split('').sort()
    let array2 = t.split('').sort()
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }

    return true
}

function isAnagram(s, t) {
    if (s.length !== t.length) return false

    let map = {}
    for (let i = 0; i < s.length; i++) {
        let c1 = s[i]
        let c2 = t[i]
        if (map[c1] === undefined) {
            map[c1] = 1
        } else {
            map[c1]++
        }
        if (map[c2] === undefined) {
            map[c2] = -1
        } else {
            map[c2]--
        }
    }

    for (let key of Object.keys(map)) {
        if (map[key] !== 0) return false
    }

    return true
}
