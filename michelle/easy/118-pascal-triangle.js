/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]

    let result = generate(numRows - 1)
    let previous = result[result.length - 1]
    let newRow = [1]
    for (let i = 0; i < previous.length - 1; i++) {
        newRow.push(previous[i] + previous[i + 1])
    }
    newRow.push(1)

    result.push(newRow)
    return result
}

function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]

    let result = [[1]]
    for (let row = 1; row < numRows; row++) {
        let temp = createNewRow(result[result.length - 1])
        result.push(temp)
    }

    return result
}

function createNewRow(row) {
    let newRow = [1]
    for (let i = 0; i < row.length - 1; i++) {
        newRow.push(row[i] + row[i + 1])
    }
    newRow.push(1)
    return newRow
}
