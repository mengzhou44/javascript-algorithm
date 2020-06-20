var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)

    let childIndex = g.length - 1
    let cookieIndex = s.length - 1
    let result = 0
    while (Math.min(cookieIndex, childIndex) >= 0) {
        if (g[childIndex] <= s[cookieIndex]) {
            cookieIndex--
            result++
        }
        childIndex--
    }

    return result
}

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let result = 0
    for (let child of g) {
        while (s.length > 0) {
            let cookie = s.shift()
            if (cookie >= child) {
                result++
                break
            }
        }
    }

    return result
}
