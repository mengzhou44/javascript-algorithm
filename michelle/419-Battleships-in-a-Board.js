function countBattleships(board) {
    function dfs(row, col) {
        if (row < 0 || row > board.length - 1) return
        if (col < 0 || col > board[0].length - 1) return

        if (board[row][col] === '.') return
        board[row][col] = '.'

        dfs(row, col + 1)
        dfs(row + 1, col)
    }

    let count = 0
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'X') {
                count++
                dfs(row, col)
            }
        }
    }
    return count
}
