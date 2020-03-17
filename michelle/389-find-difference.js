var findTheDifference = function(s, t) {
    let array1 = s.split('').sort()
    let array2 = t.split('').sort()

    for (let i = 0; i < array2.length - 1; i++) {
        if (array2[i] !== array1[i]) {
            return array2[i]
        }
    }

    return array2[array2.length - 1]
}

var findTheDifference = function(s, t) {
    let map = {}
    for (let c of t) {
        if (map[c] === undefined) {
            map[c] = 1
        } else {
            map[c] = map[c] + 1
        }
    }

    for (let c of s) {
        map[c] = map[c] - 1
        if (map[c] === 0) {
            delete map[c]
        }
    }

    return Object.keys(map)[0]
}
