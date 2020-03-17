function findSubstring(str, k) {
    let maxLength = k
    let startIndex = 0
    while (startIndex < str.length - maxLength) {
        let temp = str.slice(startIndex, startIndex + maxLength)
        while (
            distinctLetters(temp) <= k &&
            startIndex < str.length - maxLength
        ) {
            maxLength++

            temp = str.slice(startIndex, startIndex + maxLength)
        }
        startIndex++
    }
    return maxLength
}

function distinctLetters(str) {
    let array = str.split('')
    let result = []
    for (let item of array) {
        if (result.includes(item) === false) {
            result.push(item)
        }
    }
    return result.length
}

console.log(findSubstring('aabcdeffff', 3))
