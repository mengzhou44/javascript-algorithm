function exist(board, word) {
    function dfs(i, j, currentWordIndex) {
        if (currentWordIndex === word.length) {
            return true
        }

        if (
            i < 0 ||
            i > board.length - 1 ||
            j < 0 ||
            j > board[0].length - 1 ||
            board[i][j] !== word[currentWordIndex]
        ) {
            return false
        }

        board[i][j] = ''

        const found =
            dfs(i + 1, j, currentWordIndex + 1) ||
            dfs(i - 1, j, currentWordIndex + 1) ||
            dfs(i, j + 1, currentWordIndex + 1) ||
            dfs(i, j - 1, currentWordIndex + 1)

        board[i][j] = word[currentWordIndex]
        return found
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) {
                    return true
                }
            }
        }
    }

    return false
}
