function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''
    let index = 0
    while (index < strs[0].length) {
        let temp = strs[0][index]
        for (let str of strs) {
            if (str[index] !== temp) {
                return strs[0].substring(0, index)
            }
        }
        index++
    }

    return strs[0]
}

function longestCommonPrefix(strs) {
    if (strs.length == 0) return ''
    let current = 0
    let first = strs[0]
    while (current < first.length) {
        for (let str of strs) {
            if (str[current] !== first[current]) {
                if (current === 0) return ''
                return first.substring(0, current)
            }
        }
        current++
    }

    if (current === 0) return ''
    return first.substring(0, current)
}

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]

    let first = strs.shift()
    let second = longestCommonPrefix(strs)

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            return first.substring(0, i)
        }
    }

    return first
}
