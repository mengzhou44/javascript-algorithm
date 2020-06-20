var smallestDistancePair = function (nums, k) {
    nums = nums.sort((a, b) => a - b)
    let l = 0
    let r = nums[nums.length - 1] - nums[0]
    let m
    while (l <= r) {
        m = Math.floor((l + r) / 2)
        let pairs = findPairs(nums, m)
        if (pairs >= k) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l
}

function findPairs(nums, m) {
    let result = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] <= m) {
                result++
            }
        }
    }
    return result
}

function smallestDistancePair(nums, k) {
    nums.sort((a, b) => a - b)
    let l = 0
    let r = nums[nums.length - 1] - nums[0]
    let distances = getAllDistances(nums)

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        let pairs = findPairs(distances, m)
        if (pairs >= k) {
            r = m - 1
        } else {
            l = m + 1
        }
    }

    return l
}
function getAllDistances(nums) {
    let distances = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            distances.push(Math.abs(nums[i] - nums[j]))
        }
    }
    return distances
}

function findPairs(distances, value) {
    return distances.filter((distance) => distance <= value).length
}
