function scoreOfParentheses(str) {
    return score(str, 0, str.length - 1)
}

function score(str, l, r) {
    if (l + 1 === r) return 1
    let b = 0
    for (let i = l; i < r; i++) {
        if (str[i] === '(') {
            b++
        } else {
            b--
        }
        if (b === 0) {
            return score(str, l, i) + score(str, i + 1, r)
        }
    }
    return 2 * score(str, l + 1, r - 1)
}
