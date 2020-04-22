function permute(nums) {
    if (nums.length <= 1) return [nums]
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let array = [...nums.slice(0, i), ...nums.slice(i + 1)]
        for (let temp of permute(array)) {
            result.push([nums[i], ...temp])
        }
    }
    return result
}
