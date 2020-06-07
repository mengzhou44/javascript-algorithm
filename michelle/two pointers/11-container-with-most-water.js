function maxArea(height) {
    let result = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        let temp = Math.min(height[l], height[r]) * (r - l)
        result = Math.max(result, temp)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return result
}
