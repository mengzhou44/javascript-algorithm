function countSmaller(nums) {
    let array = []
    for (let i = 0; i < nums.length; i++) {
        array.push(findSmaller(nums, i))
    }

    return array
}

function findSmaller(nums, index) {
    if (index === nums.length - 1) return 0

    let count = 0
    for (let i = index + 1; i < nums.length; i++) {
        if (nums[i] < nums[index]) {
            count++
        }
    }
    return count
}

function countSmaller(nums) {
    let map = new Map()
    function findSmaller(nums, index) {
        if (map.has(index)) {
            map.get(index)
        }
        let count = 0
        for (let i = index; i < nums.length; i++) {
            if (nums[i] < nums[index]) {
                count++
            }
        }
        map.set(index, count)
        return count
    }

    if (nums.length === 0) return []
    let count = findSmaller(nums, 0)
    return [count, ...countSmaller(nums.shift())]
}
