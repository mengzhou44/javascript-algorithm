var maxArea = function (height) {
    let result = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (j = i + 1; j < height.length; j++) {
            result = Math.max(result, Math.min(height[i], height[j]) * (j - i))
        }
    }
    return result
}
function maxArea(height) {
    let result = 0
    let l = 0
    let r = height.length - 1
    while (l < r) {
        result = Math.max(result, Math.min(height[l], height[r]) * (r - l))
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return result
}
