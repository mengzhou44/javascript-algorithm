/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let max = ''
    for (let i = 0; i < s.length; i++) {
        let temp1 = getLongestPalindrome(s, i, i)
        let temp2 = getLongestPalindrome(s, i, i + 1)
        let temp = temp1.length > temp2.length ? temp1 : temp2
        max = max.length > temp.length ? max : temp
    }

    return max
}

function getLongestPalindrome(str, left, right) {
    let result = ''
    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            result = str.substring(left, right + 1)
            left--
            right++
        } else {
            break
        }
    }
    return result
}
