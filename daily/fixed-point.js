// nums is sorted
function findFixedPoint(nums) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[right] < left) {
            return null
        }
        if (nums[left] > right) {
            return null
        }

        if (nums[left] === left) {
            return left
        }
        if (nums[right] === right) {
            return right
        }

        left++
        right--
    }
    console.log(left)

    return null
}

console.log(findFixedPoint([-5, -4, -3, -2, -1, 0]))
console.log(findFixedPoint([-5, 1, 3, 4]))
console.log(findFixedPoint([-9, 0, 2, 7]))
