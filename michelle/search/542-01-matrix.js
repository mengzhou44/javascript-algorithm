function updateMatrix(matrix) {
    let result = []
    for (let row = 0; row < matrix.length; row++) {
        let temp = []
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                temp.push(0)
            } else {
                temp.push(1)
            }
        }
        result.push(temp)
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (result[row][col] === 1) {
                result[row][col] = findMiniDistance(row, col, matrix)
            }
        }
    }

    return result
}

function findMiniDistance(row, col, matrix) {
    let array = [[row, col]]
    let levelSize = 1
    let level = 0

    function findChildren(row, col) {
        let children = []
        if (!isOutOfRange(row + 1, col)) {
            children.push([row + 1, col])
        }

        if (!isOutOfRange(row - 1, col)) {
            children.push([row - 1, col])
        }

        if (!isOutOfRange(row, col + 1)) {
            children.push([row, col + 1])
        }

        if (!isOutOfRange(row, col - 1)) {
            children.push([row, col - 1])
        }

        return children
    }

    function isOutOfRange(row, col) {
        if (
            row >= matrix.length ||
            row < 0 ||
            col >= matrix[0].length ||
            col < 0
        )
            return true

        return false
    }

    while (array.length > 0) {
        let count = 0
        while (count < levelSize) {
            let item = array.shift()
            let i = item[0]
            let j = item[1]

            if (matrix[i][j] === 0) return level

            let children = findChildren(i, j)

            for (child of children) {
                array.push(child)
            }
            count++
        }
        levelSize = array.length
        level++
    }

    return level
}
