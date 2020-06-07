function convertToTitle(n) {
    let result = []

    while (n > 0) {
        let temp = getLetter((n - 1) % 26)
        result.unshift(temp)
        n = Math.floor((n - 1) / 26)
    }

    return result.join('')
}

function getLetter(number) {
    return String.fromCharCode(number + 65)
}
