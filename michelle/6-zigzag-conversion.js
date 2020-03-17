function convert(s, numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        result.push([])
    }

    let array = s.split('')
    while (array.length > 0) {
        let row = 0
        while (row < numRows) {
            let c = array.shift()
            if (c === undefined) break
            result[row] += c
            row++
        }

        row = numRows - 2
        while (row > 0) {
            let c = array.shift()
            if (c === undefined) break
            result[row] += c
            row--
        }
    }

    return result.join('')
}

var convert = function(s, numRows) {
    let result = []
    let array = s.split('')
    for (let i = 0; i < numRows; i++) {
        result.push([])
    }
    while (array.length > 0) {
        for (let i = 0; i < numRows; i++) {
            let c = array.shift()
            if (c === undefined) break
            result[i] += c
        }

        for (let i = numRows - 2; i > 0; i--) {
            let c = array.shift()
            if (c === undefined) break
            result[i] += c
        }
    }

    return result.join('')
}

function convert(s, numRows) {
    if (numRows === 1) return s
    let result = []
    for (let i = 0; i < numRows; i++) {
        result.push([])
    }
    let row = 0
    let step = 0
    for (let letter of s) {
        result[row] += letter

        if (row === 0) {
            step = 1
        } else if (row === numRows - 1) {
            step = -1
        }
        row = row + step
    }

    return result.join('')
}
