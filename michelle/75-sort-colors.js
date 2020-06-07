/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let l = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            swap(nums, i, l)
            l++
        }
    }
    for (let i = l; i < nums.length; i++) {
        if (nums[i] === 1) {
            swap(nums, i, l)
            l++
        }
    }
    return nums
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}


console.log(sortColors([1,2,1,2,0,0]))