function numIslands(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0
    let m = grid.length
    let n = grid[0].length

    function dfs(row, col) {
        if (row < 0 || row >= m) return 0
        if (col < 0 || col >= n) return 0

        if (grid[row][col] === '0') return 0

        grid[row][col] = '0'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)

        return 1
    }

    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j)) {
                count++
            }
        }
    }

    return count
}
