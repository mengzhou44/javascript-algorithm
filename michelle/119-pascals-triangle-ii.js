function getRow(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]

    let previous = getRow(rowIndex - 1)

    let result = [1]

    for (let i = 1; i < previous.length; i++) {
        result.push(previous[i - 1] + previous[i])
    }
    
    result.push(1)

    return result
}
