function productExceptSelf(nums) {
    let array1 = new Array(nums.length).fill(1)
    let array2 = new Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        array1[i] = array1[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        array2[i] = array2[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        array1[i] = array1[i] * array2[i]
    }

    return array1
}
