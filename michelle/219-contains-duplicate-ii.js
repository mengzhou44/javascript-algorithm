function containsNearbyDuplicate(nums, k) {
    if (nums.length < 2) return false

    for (let i = 0; i < nums.length; i++) {
        let endIndex = i + 1
        while (endIndex - i <= k && endIndex < nums.length) {
            if (nums[i] === nums[endIndex]) {
                return true
            }
            endIndex++
        }
    }
    return false
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    if (nums.length < 2) return false

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i
        } else {
            if (i - map[nums[i]] <= k) {
                return true
            } else {
                map[nums[i]] = i
            }
        }
    }
    return false
}
