function updateMatrix(matrix) {
    let result = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        result[i] = new Array(matrix[0].length).fill(0)
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            result[row][col] = findMinDistances(matrix, row, col)
        }
    }
    return result
}

function findMinDistances(matrix, i, j) {
    if (matrix[i][j] === 0) return 0
    let array = [[i, j]]
    let distance = 0
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        while (count < levelSize) {
            let [row, col] = array.shift()

            if (matrix[row][col] === 0) {
                return distance
            }
            addToArray(array, row + 1, col)
            addToArray(array, row - 1, col)
            addToArray(array, row, col + 1)
            addToArray(array, row, col - 1)
            count++
        }

        distance++
    }

    function addToArray(array, row, col) {
        if (
            row >= 0 &&
            row < matrix.length &&
            col >= 0 &&
            col < matrix[0].length
        ) {
            array.push([row, col])
        }
    }
}
