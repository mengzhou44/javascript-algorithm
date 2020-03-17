var intersection = function(nums1, nums2) {
    let output = []
    for (let num of nums1) {
        if (nums2.includes(num) && !output.includes(num)) {
            output.push(num)
        }
    }
    return output
}
