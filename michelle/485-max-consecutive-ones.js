var findMaxConsecutiveOnes = function(nums) {
    let result = 0
    let consecutiveOnes = 0
    for (let num of nums) {
        if (num === 0) {
            result = Math.max(consecutiveOnes, result)
            consecutiveOnes = 0
        } else {
            consecutiveOnes++
        }
    }

    result = Math.max(consecutiveOnes, result)
    return result
}
