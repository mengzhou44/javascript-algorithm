function maxSubarraySum(array) {
    if (array.length < 2) return array

    let sum = array.reduce((sum, item) => sum + item)

    let leftMaxArray = maxSubarraySum(array.slice(0, array.length - 1))
    let leftSum = leftMaxArray.reduce((sum, item) => sum + item)
    let rightMaxArray = maxSubarraySum(array.slice(1))
    let rightSum = rightMaxArray.reduce((sum, item) => sum + item)

    if (sum > leftSum && sum > rightSum) {
        return array
    }

    if (leftSum > sum && leftSum > rightSum) {
        return leftMaxArray
    }

    return rightMaxArray
}


console.log(maxSubarraySum([34, -50, 42, 14, -5, 86]))