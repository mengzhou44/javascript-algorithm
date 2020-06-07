function lengthOfLongestSubstring(s) {
    let map = new Map()
    let max = 0
    let start = -1

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) > start) {
            start = map.get(s[i])
            map.set(s[i], i)
        } else {
            map.set(s[i], i)
            max = Math.max(max, i - start)
        }
    }

    return max
}
