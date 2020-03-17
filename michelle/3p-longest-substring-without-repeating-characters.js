function lengthOfLongestSubstring(s) {
    let map = new Map()
    start = -1
    max = 0

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) !== undefined && map.get(s[i]) > start) {
            start = map.get(s[i])
            map.set(s[i], i)
        } else {
            map.set(s[i], i)
            max = Math.max(i - start, max)
        }
    }

    return max
}
