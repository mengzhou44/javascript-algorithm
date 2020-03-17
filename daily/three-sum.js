function threeSum(nums) {
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let temp = 0 - nums[i] - nums[j]
            let index = nums.indexOf(temp)
            if (index !== -1 && index !== i && index !== j) {
                let triplet = [temp, nums[i], nums[j]]
                if (!isTripletExisted(result, triplet)) {
                    result.push(triplet)
                }
            }
        }
    }

    return result
}

function isTripletExisted(array, triplet) {
    for (let item of array) {
        if (
            item.includes(triplet[0]) &&
            item.includes(triplet[1]) &&
            item.includes(triplet[2])
        ) {
            return true
        }
    }

    return false
}


console.log(threeSum([0, -1, 2, -3, 1]))
console.log(threeSum([1, -2, 1, 0, 5]))