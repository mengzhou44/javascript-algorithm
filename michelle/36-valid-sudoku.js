function isValidSudoku(board) {
    for (row of board) {
        if (!isListValid(row)) {
            return false
        }
    }

    for (let col = 0; col < board[0].length; col++) {
        let columnData = []
        for (let row = 0; row < board.length; row++) {
            columnData.push(board[row][col])
        }
        if (!isListValid(columnData)) {
            return false
        }
    }

    for (let i = 0; i < board.length; i = i + 3) {
        for (let j = 0; j < board[0].length; j = j + 3) {
            if (!isBoxValid(board, i, j)) {
                return false
            }
        }
    }

    return true
}

function isBoxValid(board, i, j) {
    let map = new Map()
    for (let row = i; row < i + 3; row++) {
        for (let col = j; col < j + 3; col++) {
            let s = board[row][col]
            if (s !== '.') {
                if (map.get(s) === undefined) {
                    map.set(s, 1)
                } else {
                    return false
                }
            }
        }
    }
    return true
}

function isListValid(list) {
    let map = new Map()
    for (let s of list) {
        if (s !== '.') {
            if (map.get(s) === undefined) {
                map.set(s, 1)
            } else {
                return false
            }
        }
    }

    return true
}
