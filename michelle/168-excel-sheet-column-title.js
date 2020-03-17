var convertToTitle = function(n) {
    let result = []

    while (n > 0) {
        let temp = getLetter((n - 1) % 26)
        result.unshift(temp)
        n = Math.floor((n - 1) / 26)
    }

    return result.join('')
}

function getLetter(n) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return letters[n]
}
