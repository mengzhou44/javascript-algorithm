function wordBreak(s, wordDict) {
    let mem = new Map()

    function helper(s, wordDict) {
        if (mem.has(s)) return mem.get(s)

        if (wordDict.includes(s)) {
            mem.set(s, true)
            return true
        }

        for (let i = 1; i <= s.length; i++) {
            let left = s.substring(0, i)
            let right = s.substring(i)

            if (wordDict.includes(right) && helper(left, wordDict)) {
                mem.set(s, true)
                return true
            }
        }

        mem.set(s, false)

        return false
    }

    return helper(s, wordDict)
}
