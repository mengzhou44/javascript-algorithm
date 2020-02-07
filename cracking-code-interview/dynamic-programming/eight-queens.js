function toPlaceOrNotPlace(board, row, col) {
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 'Q') {
            return false
        }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false
        }
    }

    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === 'Q') {
            return false
        }
    }
    return true
}

function placeQueen(board, col) {
    if (col >= board.length) {
        return true
    }
    for (let row = 0; row < board.length; row++) {
        if (toPlaceOrNotPlace(board, row, col) === true) {
            board[row][col] = 'Q'
            if (placeQueen(board, col + 1)) {
                return true
            }
            board[row][col] = ' '
        } else {
            board[row][col] = ' '
        }
    }
    return false
}

function solve(n) {
    let board = new Array(n)
    for (let row = 0; row < n; row++) {
        board[row] = new Array(n)
    }

    if (placeQueen(board, 0) === true) {
      
        console.log(board)
    } else {
        console.log('Solution not found!')
    }
}

solve(4)
