/**
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(words) {
    let result = []
    let keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

    for (let word of words) {
        for (let row of keyboard) {
            if (isWordInRow(word, row)) {
                result.push(word)
            }
        }
    }
    return result
}

function isWordInRow(word, row) {
    word = word.toLowerCase()
    for (let c of word) {
        if (!row.includes(c)) {
            return false
        }
    }
    return true
}
