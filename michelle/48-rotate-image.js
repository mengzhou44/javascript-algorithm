/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    let N = matrix.length
    let n = N - 1

    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = i; j < n - i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[n - j][i]
            matrix[n - j][i] = matrix[n - i][n - j]
            matrix[n - i][n - j] = matrix[j][n - i]
            matrix[j][n - i] = temp
        }
    }
}
