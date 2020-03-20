function generateMatrix(n) {
    let startRow = 0
    let endRow = n - 1

    let startColumn = 0
    let endColumn = n - 1

    let result = []
    for (let i = 0; i < n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(0)
        }
        result.push(temp)
    }
    let count = 0
    while (startRow <= endRow && startColumn <= endColumn) {
        for (let i = startColumn; i <= endColumn; i++) {
            count++
            result[startRow][i] = count
        }
        startRow++
        for (let i = startRow; i <= endRow; i++) {
            count++
            result[i][endColumn] = count
        }
        endColumn--
        for (let i = endColumn; i >= startColumn; i--) {
            count++
            result[endRow][i] = count
        }
        endRow--
        for (let i = endRow; i >= startRow; i--) {
            count++
            result[i][startColumn] = count
        }
        startColumn++
    }

    return result
}
