var countBinarySubstrings = function (s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && s[i + 1] === '0') {
            count += findContinuousSize(s, i)
        } else if (s[i] === '0' && s[i + 1] === '1') {
            count += findContinuousSize(s, i)
        }
    }

    return count
}

function findContinuousSize(s, i) {
    let left = i
    let right = i + 1
    let count = 0

    while (left >= 0 && right < s.length) {
        if (s[left] === s[i] && s[right] === s[i + 1]) {
            left--
            right++
            count++
        } else {
            break
        }
    }

    return count
}
