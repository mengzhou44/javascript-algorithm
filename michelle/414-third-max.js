function thirdMax(nums) {
    nums = nums.sort((a, b) => b - a)
    let temp = [nums[0]]
    while (nums.length > 0) {
        let item = nums.shift()
        if (item < temp[temp.length - 1]) {
            temp.push(item)
        }
    }

    if (temp.length < 3) return temp[0]

    return temp[2]
}
