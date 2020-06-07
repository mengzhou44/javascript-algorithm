function majorityElement(nums) {
    let num1 = 0
    let num2 = 0
    let c1 = 0
    let c2 = 0
    for (let num of nums) {
        if (num === num1) {
            c1++
        } else if (num === num2) {
            c2++
        } else if (c1 === 0) {
            num1 = num
            c1++
        } else if (c2 === 0) {
            num2 = num
            c2++
        } else {
            c1--
            c2--
        }
    }
    if (num1=== num2) return [num1]

    let result = []
    c1 = 0
    c2 = 0
    for (let num of nums) {
        if (num === num1) {
            c1++
        } else if (num === num2) {
            c2++
        }
    }

    if (c1 > Math.floor(nums.length / 3)) {
        result.push(num1)
    }

    if (c2 > Math.floor(nums.length / 3)) {
        result.push(num2)
    }

    return result
}
