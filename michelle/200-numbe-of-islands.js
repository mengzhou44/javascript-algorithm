function numIslands(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0

    function dfs(i, j) {
        if (i < 0 || i > grid.length - 1) return 0
        if (j < 0 || j > grid[0].length - 1) return 0
        if (grid[i][j] === '0') return 0

        grid[i][j] = '0'

        dfs(i, j - 1)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i + 1, j)

        return 1
    }

    let result = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                result += dfs(row, col)
            }
        }
    }

    return result
}
