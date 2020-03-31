var searchMatrix = function(matrix, target) {
    let temp = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            temp.push(matrix[row][col])
        }
    }
    return findTarget(temp, target)
}

function findTarget(array, target) {
    if (array === null || array.length === 0) return false
    if (array.length === 1) {
        return array[0] === target
    }

    let start = 0
    let end = array.length - 1

    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === target) {
            return true
        } else if (array[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    if (array[start] === target || array[end] === target) {
        return true
    }
    return false
}
