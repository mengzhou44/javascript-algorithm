function spiralOrder(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return []

    let m = matrix.length
    let n = matrix[0].length
    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = m - 1
    let result = []

    while (startColumn < endColumn && startRow < endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            result.push(matrix[startRow][i])
        }
        startRow++

        for (let i = startRow; i <= endRow; i++) {
            result.push(matrix[i][endColumn])
        }
        endColumn--

        for (let i = endColumn; i >= startColumn; i--) {
            result.push(matrix[endRow][i])
        }
        endRow--

        for (let i = endRow; i >= startRow; i--) {
            result.push(matrix[i][startColumn])
        }
        startColumn++
    }

    if (startColumn === endColumn && startRow === endRow) {
        result.push(matrix[startRow][startColumn])
    }

    if (m % 2 !== 0) {
        if (startColumn < endColumn) {
            for (let i = startColumn; i <= endColumn; i++) {
                result.push(matrix[startRow][i])
            }
        }
    }
    if (n % 2 !== 0) {
        if (startRow < endRow) {
            for (let i = startRow; i <= endRow; i++) {
                result.push(matrix[i][endColumn])
            }
        }
    }

    return result
}
