function removeOuterParentheses(str) {
    let stack = []
    let b = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            b++
        } else {
            b--
        }
        if (!isOutter(b, str[i])) {
            stack.push(str[i])
        }
    }
    return stack.join('')
}

function isOutter(b, letter) {
    if (b === 0 && letter === ')') return true
    if (b === 1 && letter === '(') return true
    return false
}
