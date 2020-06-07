


// function canPlaceQueen(board, row, col) {
//     for (let i = 0; i < row ; i++) {
//         if (board[i][col] === 'Q') {
//             return false
//         }
//     }

//     for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
//         if (board[i][j] === 'Q') {
//             return false
//         }
//     }

//     for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
//         if (board[i][j] === 'Q') {
//             return false
//         }
//     }
//     return true
// }

function placeQueen(board, row) {
    if (row >= board.length) {
        return true
    }
    for (let col = 0; col < board[0].length; col++) {
        if (canPlaceQueen(board, row, col) === true) {
            board[row][col] = 'Q'
            if (placeQueen(board, row + 1)) {
                return true
            }
            board[row][col] = ' '
        } 

    }
    return false
}

function solve(n) {
    let board = new Array(n)
    for (let row = 0; row < n; row++) {
        board[row] = new Array(n).fill(' ')
    }

    if (placeQueen(board, 0) === true) {
        console.log(board)
    } else {
        console.log('Solution not found!')
    }
}

solve(8)
