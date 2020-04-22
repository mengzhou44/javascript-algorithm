function longestConsecutive(nums) {
    if (nums.length == 0) return 0
    if (nums.length == 1) return 1
    nums = nums.sort((a, b) => a - b)
    let result = Number.MIN_SAFE_INTEGER
    let count = 1
    let currentIndex = 1
    while (currentIndex < nums.length) {
        if (nums[currentIndex] - nums[currentIndex - 1] === 1) {
            count++
        } else if (nums[currentIndex] !== nums[currentIndex - 1]) {
            result = Math.max(result, count)
            count = 1
        }
        currentIndex++
    }

    return Math.max(result, count)
}

function longestConsecutive(nums) {
    nums = nums.sort((a, b) => a - b)
    let result = 0
    for (let num of nums) {
        if (!nums.includes(num - 1)) {
            let count = 1
            while (nums.includes(++num)) {
                count++
            }
            result = Math.max(result, count)
        }
    }

    return result
}
