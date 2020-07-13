function removeDuplicates(S) {
    let stack = []
    for (let c of S) {
        if (stack.length === 0 || stack[stack.length - 1] !== c) {
            stack.push(c)
        } else {
            stack.pop()
        }
    }
    return stack.join('')
}
