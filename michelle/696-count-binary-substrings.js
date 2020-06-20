/**
 * @param {string} s
 * @return {number}
 */
function countBinarySubstrings(s) {
    let count = 0
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] != s[i + 1]) {
            count += findContinuousSize(s, i)
        }
    }
    return count
}

function findContinuousSize(s, i) {
    let count = 0
    let left = i
    let right = i + 1
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[i] || s[right] !== s[i + 1]) {
            break
        }
        left--
        right++
        count++
    }
    return count
}
