function isValidSudoku(board) {
    let rows = new Map()
    let cols = new Map()
    let boxes = new Map()

    for (let i = 0; i < 9; i++) {
        rows.set(i, new Set())
        cols.set(i, new Set())
        boxes.set(i, new Set())
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let val = board[row][col]
            let boxNumber = getBoxNumber(row, col)
            let success = true
            if (board[row][col] !== '.') {
                success = success && addToSet(rows.get(row), val)
                success = success && addToSet(cols.get(col), val)
                success = success && addToSet(boxes.get(boxNumber), val)
                if (success === false) return false
            }
        }
    }

    return true
}

function getBoxNumber(row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3)
}

function addToSet(set, val) {
    if (set.has(val)) return false
    set.add(val)
    return true
}
