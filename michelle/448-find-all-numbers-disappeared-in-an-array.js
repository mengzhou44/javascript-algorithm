var findDisappearedNumbers = function(nums) {
    nums = nums.sort((a, b) => a - b)
    let set = []
    let index = 0
    while (index < nums.length) {
        if (!set.includes(nums[index])) {
            set.push(nums[index])
        }
        index++
    }
    let currentIndex = 0
    let result = []
    for (let i = 1; i <= nums.length; i++) {
        if (i === set[currentIndex]) {
            currentIndex++
        } else {
            result.push(i)
        }
    }
    return result
}
