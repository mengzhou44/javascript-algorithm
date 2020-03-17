var findContentChildren = function(g, s) {
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
