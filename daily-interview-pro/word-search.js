function searchWord(array, word) {
    for (let i = 0; i < array.length; i++) {
        let text = getTextByRow(array, i)
        if (text.includes(word)) {
            return true
        }
    }
    for (let j = 0; j < array.length; j++) {
        let text = getTextByColumn(array, j)
        if (text.includes(word)) {
            return true
        }
    }
    return false
}

function getTextByRow(array, row) {
    return array[row].join('')
}

function getTextByColumn(array, col) {
    let temp = []
    for (let i = 0; i < array.length; i++) {
        temp.push(array[i][col])
    }
    return temp.join('')
}

let matrix = [
    ['F', 'A', 'C', 'E'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
]

console.log(searchWord(matrix, 'FACE'))
