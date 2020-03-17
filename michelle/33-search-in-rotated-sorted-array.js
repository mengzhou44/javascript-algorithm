function search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (target >= nums[0]) {
            if (nums[middle] >= nums[0] && target > nums[middle]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else {
            if (nums[middle] >= nums[0] || nums[middle] < target) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }

    return -1
}

*******************

function search(nums, target) {
    if (nums.length === 0) return -1

    let maxIndex = -1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            maxIndex = i - 1
        }
    }

    if (maxIndex === -1) {
        return searchTarget(nums, target, 0, nums.length - 1)
    }

    if (nums[0] === target) return 0

    if (nums[0] > target) {
        return searchTarget(nums, target, maxIndex + 1, nums.length - 1)
    }

    return searchTarget(nums, target, 0, maxIndex)
}

function searchTarget(nums, target, left, right) {
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] > target) {
            right = middle - 1
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }

    return -1
}
