var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let cut1 = 0
    let cut2 = 0
    let cutL = 0
    let cutR = nums1.length
    let length = nums1.length + nums2.length

    while (cut1 <= nums1.length) {
        cut1 = (cutL + cutR) / 2
        cut2 = length / 2 - cut1
        let L1 = cut1 === 0 ? Number.MAX_SAFE_INTEGER : nums1[cut1 - 1]
        let L2 = cut2 === 0 ? Number.MAX_SAFE_INTEGER : nums2[cut2 - 1]
        let R1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[cut1]
        let R2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[cut2]
        if (L1 > R2) {
            cutR = cut1 - 1
        } else if (L2 > R1) {
            cutL = cut1 + 1
        } else {
            if (length % 2 === 0) {
                L1 = L1 > L2 ? L1 : L2
                R1 = R1 < R2 ? R1 : R2
                return (L1 + R1) / 2
            } else {
                return R1 < R2 ? R1 : R2
            }
        }
    }
}
