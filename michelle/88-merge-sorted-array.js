ffunction merge(nums1, m, nums2, n) {
    
    while(m>0 && n>0) {
        if (nums1[m-1]<nums2[n-1]) {
             nums1[m-1+n] = nums2[n-1]
             n = n-1
        } else {
             nums1[m-1+n] = nums1[m-1]
            m = m-1
        }
    }
    
    while (n>0) {
         nums1[n-1]= nums2[n-1]
         n = n-1
    }
    
    return nums1
    
}

let nums1 = [0]
let nums2 = [1]

console.log(merge(nums1, 0, nums2, 1))
