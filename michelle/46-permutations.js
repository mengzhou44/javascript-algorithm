function permute(nums) {
    if (nums.length === 1) return [nums]

    let first = nums.shift()
    let array = permute(nums)

    result = []
    for (let item of array) {
        for (let i = 0; i < item.length; i++) {
            let left = item.slice(0, i)
            let right = item.slice(i)
            result.push([...left, first, ...right])
        }
        result.push([...item, first])
    }
    return result
}
