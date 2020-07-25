/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    if (nums === null || nums.length < 4) return []
    nums.sort((a, b) => a - b)
    let result = []

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let low = j + 1
            let high = nums.length - 1
            let newTarget = target - nums[i] - nums[j]

            while (low < high) {
                if (nums[low] + nums[high] === newTarget) {
                    result.push([nums[low], nums[high], nums[i], nums[j]])
                    while (low < high && nums[low] === nums[low + 1]) {
                        low++
                    }
                    while (low < high && nums[high] === nums[high - 1]) {
                        high--
                    }
                    low++
                    high--
                } else if (nums[low] + nums[high] < newTarget) {
                    low++
                } else {
                    high--
                }
            }
        }
    }

    return result
}
