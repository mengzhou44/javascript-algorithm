var threeSumClosest = function(nums, target) {
    if (nums.length < 3) throw new Error()

    let result = helper(nums, target)
    console.log('result', result)
    return sum(result)
}

function helper(nums, target) {
    if (nums.length === 3) return nums

    let first = nums.shift()

    let array = [...helper(nums, target), first]

    let minSum
    let results = []

    for (let i = 0; i < array.length; i++) {
        let temp = createSubArray(i, array)
        let total = sum(temp)

        if (minSum === undefined) {
            minSum = total
            results = temp
        } else {
            let value1 = Math.abs(total - target)
            let value2 = Math.abs(minSum - target)

            if (value1 < value2) {
                minSum = total
                results = temp
            }
        }
    }

    return results
}

function createSubArray(index, array) {
    let temp = []
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            temp.push(array[i])
        }
    }

    return temp
}

function sum(array) {
   return array.reduce((sum, item)=> sum+ item, 0)
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
