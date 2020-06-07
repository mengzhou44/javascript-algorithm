function merge(nums1, m, nums2, n) {
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
        return nums1
    }

    let current = n - 1
    let endIndex = m - 1
    while (current >= 0) {
        mergeNumber(nums1, endIndex, nums2[current])

        current--
        endIndex++
    }

    return nums1
}

function mergeNumber(nums, endIndex, number) {
    let index = endIndex
    while (index >= 0) {
        if (nums[index] > number) {
            nums[index + 1] = nums[index]
        } else {
            nums[index + 1] = number
            return
        }
        index--
    }
    nums[index + 1] = number
    return
}
