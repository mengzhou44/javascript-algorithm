class Coordinate {
    constructor(row, col) {
        this.row = row
        this.col = col
    }

    inbounds(array) {
        return (
            this.row >= 0 &&
            this.col >= 0 &&
            this.row < array.length &&
            this.col < array[0].length
        )
    }

    isBefore(point) {
        return this.row <= point.row && this.col <= point.col
    }

    clone() {
        return new Coordinate(this.row, this.col)
    }

    setToAverage(min, max) {
        this.row = Math.floor((min.row + max.row) / 2)
        this.col = Math.floor((min.col + max.col) / 2)
    }
}

function findElement(array, origin, dest, x) {
    if (!origin.inbounds(array) || !dest.inbounds(array)) {
        return null
    }

    if (array[origin.row][origin.col] === x) {
        return origin
    } else if (!origin.isBefore(dest)) {
        return null
    }

    let start = origin.clone()
    let diagDist = Math.min(dest.row - origin.row, dest.col - origin.col)
    let end = new Coordinate(start.row + diagDist, start.col + diagDist)
    let p = new Coordinate(0, 0)
    while (start.isBefore(end)) {
        p.setToAverage(start, end)
        if (x > array[p.row][p.col]) {
            start.row = p.row + 1
            start.col = p.col + 1
        } else {
            break
        }
    }
    return partitionAndSearch(array, origin, dest, start, x)
}

function partitionAndSearch(array, origin, dest, pivot, x) {
    let lowerLeftOrigin = new Coordinate(pivot.row, origin.col)
    let lowerLeftDest = new Coordinate(dest.row, pivot.col - 1)

    let upperRightOrigin = new Coordinate(origin.row, pivot.col)
    let upperRightDest = new Coordinate(pivot.row - 1, dest.col)

    let found = findElement(array, lowerLeftOrigin, lowerLeftDest, x)
    if (found === null) {
        found = findElement(array, upperRightOrigin, upperRightDest, x)
    }
    return found
}

function search(array, x) {
    let origin = new Coordinate(0, 0)
    let dest = new Coordinate(array.length - 1, array[0].length - 1)
    return findElement(array, origin, dest, x)
}

let array = [
    [15, 20, 70, 85],
    [20, 35, 80, 95],
    [30, 55, 95, 105],
    [40, 79, 100, 120]
]

console.log(search(array, 80))
