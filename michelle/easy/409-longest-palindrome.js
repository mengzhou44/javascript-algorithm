var longestPalindrome = function(s) {
    let map = {}
    for (let c of s) {
        if (map[c]) {
            map[c] = map[c] + 1
        } else {
            map[c] = 1
        }
    }
    
    let temp = 0
    let mark = 0
    for (let key of Object.keys(map)) {
        if (map[key] % 2 === 1) {
            mark = 1
            temp += map[key] - 1
        } else {
            temp += map[key]
        }
    }

    return temp + mark
}
