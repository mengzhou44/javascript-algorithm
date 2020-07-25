function matrixReshape(nums, r, c) {
    let rows = nums.length
    let cols = nums[0].length

    if (rows * cols !== r * c) return nums

    let result = new Array(r)
    for (let i = 0; i < r; i++) {
        result[i] = new Array(c).fill(0)
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let index = i * cols + j
            let row = Math.floor(index / c)
            let col = index % c
            result[row][col] = nums[i][j]
        }
    }

    return result
}
