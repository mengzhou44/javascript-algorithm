var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    let output = []

    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] === nums2[0]) {
            output.push(nums1[0])
            nums1.shift()
            nums2.shift()
        } else if (nums1[0] < nums2[0]) {
            nums1.shift()
        } else {
            nums2.shift()
        }
    }

    return output
}
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1)
    }
    let map = new Map()
    for (let num of nums1) {
        if (map.get(num) === undefined) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }
    let output = []

    for (let num of nums2) {
        if (map.get(num) !== undefined) {
            output.push(num)
            decreaseCount(map, num)
        }
    }
    return output
}

function decreaseCount(map, num) {
    let count = map.get(num)
    if (count === 1) {
        map.delete(num)
    } else {
        map.set(num, count - 1)
    }
}
