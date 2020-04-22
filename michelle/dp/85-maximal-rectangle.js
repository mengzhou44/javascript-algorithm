function maximalRectangle(matrix) {
    if (matrix.length === 0) return 0

    let heights = new Array(matrix[0].length).fill(0)
    let area = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === '0') {
                heights[col] = 0
            } else {
                heights[col] += parseInt(matrix[row][col])
            }
        }
        area = Math.max(area, largestRectangleArea(heights))
    }

    return area
}

function largestRectangleArea(heights) {
    let n = heights.length
    let stack = [-1]

    let max = 0
    for (let i = 0; i < n; i++) {
        while (
            peekStack(stack) !== -1 &&
            heights[peekStack(stack)] >= heights[i]
        ) {
            max = Math.max(
                max,
                heights[stack.pop()] * (i - peekStack(stack) - 1)
            )
        }
        stack.push(i)
    }

    while (peekStack(stack) !== -1) {
        max = Math.max(max, heights[stack.pop()] * (n - peekStack(stack) - 1))
    }

    return max
}

function peekStack(array) {
    if (array.length === 0) return null
    return array[array.length - 1]
}
