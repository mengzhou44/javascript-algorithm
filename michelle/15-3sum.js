/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                if (!includes(result, [nums[i], nums[l], nums[r]])) {
                    result.push([nums[i], nums[l], nums[r]])
                }
                l++
                r--
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
    }
    return result
}

function includes(array, item) {
    for (let i of array) {
        if (i[0] === item[0] && i[1] === item[1] && i[2] === item[2]) {
            return true
        }
    }
    return false
}
