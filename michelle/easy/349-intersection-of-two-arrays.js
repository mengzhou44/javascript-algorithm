var intersection = function(nums1, nums2) {
    let output = []
    for (let num of nums1) {
        if (nums2.includes(num) && !output.includes(num)) {
            output.push(num)
        }
    }
    return output
}

function intersection( nums1,  nums2) {
    if (nums1.length>nums2.length) {
        return intersection( nums2,  nums1)
    }
   
    let set = new Set()
    for(let num of nums1) {
        if (nums2.includes(num)) {
           set.add(num)
        }
    }
    return Array.from(set)
}