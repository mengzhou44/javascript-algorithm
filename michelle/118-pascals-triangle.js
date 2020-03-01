function generate(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
   
    let temp = generate(numRows - 1)

    let previousRow = temp[temp.length - 1]

    let currentRow = [1]
    for (let i = 1; i < previousRow.length; i++) {
        currentRow.push(previousRow[i - 1] + previousRow[i])
    }
    currentRow.push(1)

    temp.push(currentRow)

    return temp
}
