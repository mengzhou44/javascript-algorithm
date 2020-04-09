/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false
        let current = i + nums[i]
        max = Math.max(current, max)
    }

    return max >= nums.length - 1
}
