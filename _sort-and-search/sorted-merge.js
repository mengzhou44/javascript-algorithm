function sortedMerge(arr1, arr2) {
    let result = []
    let left = 0
    let right = 0

    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] > arr2[right]) {
            result.push(arr2[right])
            right++
        } else {
            result.push(arr1[left])
            left++
        }
    }
    if (left === arr1.length) {
        result.push(...arr2.slice(right))
    } else {
        result.push(...arr1.slice(left))
    }
    return result
}

console.log(sortedMerge([3, 5, 6, 9], [1, 4, 7]))
