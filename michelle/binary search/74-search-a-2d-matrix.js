function searchMatrix(matrix, target) {
    
    if (matrix === null || matrix.length === 0) return  false 
    
    let low= 0
    let m = matrix.length 
    let n = matrix[0].length 
    let high = m*n -1 
    
    while(low<=high) {
        let mid = Math.floor((low+high)/2)
        let midValue= matrix[Math.floor(mid/n)][mid%n]
        if (midValue === target) {
            return true 
        }else if (midValue<target){
            low=mid+1
        }else {
            high= mid -1 
        }
    }
    return false 
}

// ********************
function searchMatrix(matrix, target) {
    if (matrix.length === 0) return false
    let rowIndex = findRowIndex(matrix, target)
    if (rowIndex >= matrix.length) return false
    return searchTargetInRow(rowIndex, matrix, target)
}

function searchTargetInRow(row, matrix, target) {
    let left = 0
    let right = matrix[0].length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (matrix[row][mid] === target) {
            return true
        } else if (matrix[row][mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}

function findRowIndex(matrix, target) {
    let left = 0
    let right = matrix.length - 1
    let n = matrix[0].length
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (matrix[mid][n - 1] === target) {
            console.log('step3')
            return mid
        } else if (matrix[mid][n - 1] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    if (matrix[left][n - 1] >= target) {
        return left
    }

    return left + 1
}
