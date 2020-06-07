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
function  containsNearbyDuplicate(nums, k) {
    let map = new Map()
    for(let i=0; i<nums.length; i++) {
         if (map.has(nums[i])) {
         
             let previous = map.get(nums[i])
             if (i- previous <=  k) {
                 return true 
             }  
         }
        map.set(nums[i], i)
    }
    return false 
}