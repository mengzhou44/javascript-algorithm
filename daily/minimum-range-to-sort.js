function findRange(nums) {
    if (nums.length === 1) {
        return []
    }

    if (nums.length === 2) {
        if (nums[0] > nums[1]) {
            return [0, 1]
        }
        return []
    }

    let sorted = [...nums].sort((a, b) => a - b)

    let left = 0
    let right = nums.length - 1
    let leftBound, rightBound
    while (left < right) {
        if (nums[left] === sorted[left]) {
            left++
        } else {
            leftBound = left
        }

        if (nums[right] === sorted[right]) {
            right--
        } else {
            rightBound = right
        }

        if (leftBound !== undefined && rightBound !== undefined) {
            return [leftBound, rightBound]
        }
    }

    return []
}

console.log(findRange([1, 7, 9, 5, 7, 8, 10]))
