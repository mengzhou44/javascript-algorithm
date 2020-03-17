var firstMissingPositive = function(nums) {
    let positives = nums.filter(item => item > 0).sort((a, b) => a - b)

    if (positives.length === 0) return 1

    for (let i = 1; i <= positives[positives.length - 1]; i++) {
        if (positives.includes(i) === false) {
            return i
        }
    }

    return positives[positives.length - 1] + 1
}
