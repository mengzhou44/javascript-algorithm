function isValid(str) {
    let stack = []
    let map = new Map()
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')

    for (let c of str) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            if (stack.length === 0) {
                return false
            }
            let temp = stack.pop()
            if (c !== map.get(temp)) return false
        }
    }
    return stack.length == 0
}
