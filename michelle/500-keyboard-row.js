var findWords = function(words) {
    let result = []
    let rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    for (let word of words) {
        for (let row of rows) {
            if (wordInRow(word, row)) {
                result.push(word)
                break
            }
        }
    }

    return result
}

function wordInRow(word, row) {
    word = word.toLowerCase()
    for (let letter of word) {
        if (!row.includes(letter)) {
            return false
        }
    }
    return true
}
