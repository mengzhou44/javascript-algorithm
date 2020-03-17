var maxArea = function(height) {
    let result = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (j = i + 1; j < height.length; j++) {
            result = Math.max(result, Math.min(height[i], height[j]) * (j - i))
        }
    }
    return result
}

var maxArea = function(height) {
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
