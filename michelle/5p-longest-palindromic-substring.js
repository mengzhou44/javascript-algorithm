function longestPalindrome(s) {
    if (s.length === 1) return s

    let maxPalindrome = ''
    for (let i = 0; i < s.length; i++) {
        let temp1 = getLongestPalindrome(s, i, i)
        let temp2 = getLongestPalindrome(s, i, i + 1)
        let temp = temp1.length > temp2.length ? temp1 : temp2
        maxPalindrome =
            maxPalindrome.length > temp.length ? maxPalindrome : temp
    }
    return maxPalindrome
}

function getLongestPalindrome(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--
        r++
    }
    return s.slice(l + 1, r)
}

function isPalindrome(s) {
    let temp = s
        .split('')
        .reverse()
        .join()
    return temp === s
}
