function removeElement(nums, val) {
    if (nums.length === 1) {
        if (nums[0] === val) {
            return 0
        }

        return 1
    }
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        if (nums[left] === val) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            right--
        } else {
            left++
        }
    }

    return right + 1
}

function removeElement(nums, val) {
    let current = 0
    let count = 0
    while (current < nums.length) {
        if (nums[current] === val) {
            leftShift(nums, current)
            continue
        }
        count++
        current++
    }

    return count
}

function leftShift(nums, i) {
    for (let j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j]
    }
}
