function isStroboprogramatic(str) {
    for (let c of str) {
        if (!['0', '1', '6', '8', '9'].includes(c)) {
            return false
        }
    }
    let result = []
    for (let c of str) {
        if (c === '0' || c === '1' || c === '8') {
            result.unshift(c)
        } else if (c === '6') {
            result.unshift('9')
        } else {
            result.unshift('6')
        }
    }

    return result.join('') === str
}

 