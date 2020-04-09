function decodeString(s) {
    let countsStack = []
    let contentStack = []
    let result = ''
    let index = 0
    while (index < s.length) {
        if (isDigit(s[index])) {
            let count = parseInt(s[index])
            while (index + 1 < s.length && isDigit(s[index + 1])) {
                index = index + 1
                count = 10 * count + parseInt(s[index])
            }
            countsStack.push(count)
            index = index + 1
        } else if (s[index] === '[') {
            contentStack.push(result)
            result = ''
            index = index + 1
        } else if (s[index] === ']') {
            let content = contentStack.pop()
            let count = countsStack.pop()
            result = content + repeat(result, count)
            index = index + 1
        } else {
            result = result + s[index]
            index = index + 1
        }
    }

    return result
}

function repeat(content, count) {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += content
    }

    return result
}

function isDigit(s) {
    return '1234567890'.split('').includes(s)
}
