function countBattleships(board) {
    function isValid(row, col) {
        if (
            row < 0 ||
            col < 0 ||
            row > board.length - 1 ||
            col > board[0].length - 1
        ) {
            return false
        }

        return true
    }

    function dfs(row, col) {
        if (!isValid(row, col)) return

        if (board[row][col] === '.') return

        board[row][col] = '.'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    if (board === null) return 0

    let shipCount = 0

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'X') {
                shipCount = shipCount + 1
                dfs(row, col)
            }
        }
    }

    return shipCount
}
