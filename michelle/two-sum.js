// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let j = nums.indexOf(target - nums[i])
//         if (j !== -1 && j !== i) {
//             return [i, j]
//         }
//     }

//     return []
// }

function twoSum(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let value = map.get(target - nums[i])
        if (value !== undefined) {
            return [i, value]
        } else {
            map.set(nums[i], i)
        }
    }

    return []
}
