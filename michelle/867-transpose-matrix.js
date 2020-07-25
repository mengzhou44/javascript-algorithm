function transpose(A) {
    let transposed = new Array(A[0].length)
    for (let row = 0; row < transposed.length; row++) {
        transposed[row] = new Array(A.length).fill(0)
    }

    for (let row = 0; row < transposed.length; row++) {
        for (let col = 0; col < transposed[0].length; col++) {
            transposed[row][col] = A[col][row]
        }
    }
    return transposed
}
