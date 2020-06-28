function exist(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (dfs(row, col, '')) {
                return true
            }
        }
    }
    return false

    function dfs(i, j, current = '', visited = []) {
        if (i < 0 || i >= board.length) return false

        if (j < 0 || j >= board[0].length) return false

        let found = visited.find((item) => item[0] === i && item[1] === j)
        if (found !== undefined) {
            return false
        }

        let temp = current + board[i][j]

        if (word === temp) {
            return true
        }

        if (!word.startsWith(temp)) {
            console.log('step2', i, j)
            return false
        }

        current = temp
        visited.push([i, j])

        if (
            dfs(i + 1, j, temp, [...visited]) ||
            dfs(i, j + 1, temp, [...visited]) ||
            dfs(i - 1, j, temp, [...visited]) ||
            dfs(i, j - 1, temp, [...visited])
        ) {
            return true
        }
        return false
    }
}
