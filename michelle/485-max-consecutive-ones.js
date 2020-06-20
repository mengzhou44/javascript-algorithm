/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let maxOnes = 0
    let count = 0

    for (let num of nums) {
        if (num === 0) {
            maxOnes = Math.max(maxOnes, count)
            count = 0
        } else {
            count++
        }
    }
    return Math.max(maxOnes, count)
}
