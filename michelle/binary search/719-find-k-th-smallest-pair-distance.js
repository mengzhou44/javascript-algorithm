var smallestDistancePair = function(nums, k) {
    nums = nums.sort((a, b) => a - b)
    let l = 0
    let r = nums[nums.length - 1] - nums[0]
    let m
    while (l <= r) {
        m = Math.floor((l + r) / 2)
        let pairs = findPairs(nums, m)
        if (pairs >= k) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l
}

function findPairs(nums, m) {
    let result = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] <= m) {
                result++
            }
        }
    }
    return result
}
