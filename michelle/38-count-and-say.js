function countAndSay(n) {
    if (n === 1) return '1'
    let temp = countAndSay(n - 1)
    return generateResult(temp)
}

function generateResult(str) {
    let array = str.split('')
    let result = []
    let count = 1
    let current = array.shift()
    while (array.length > 0) {
        let next = array.shift()
        if (next === current) {
            count++
        } else {
            result.push(count)
            result.push(current)
            current = next
            count = 1
        }
    }
    result.push(count, current)
    return result.join('')
}
