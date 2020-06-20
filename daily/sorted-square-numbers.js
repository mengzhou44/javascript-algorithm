// print(square_numbers([-5, -3, -1, 0, 1, 4, 5]))
// # [0, 1, 1, 9, 16, 25, 25]

function squareNumbrs(nums) {
    let array1 = []
    let array2 = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            array1.unshift(Math.abs(nums[i]))
        } else {
            array2.push(nums[i])
        }
    }
    let merged = []

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] < array2[0]) {
            let value = array1.shift()
            merged.push(value * value)
        } else {
            let value = array2.shift()
            merged.push(value * value)
        }
    }
    while (array1.length > 0) {
        let value = array1.shift()
        merged.push(value * value)
    }

    while (array2.length > 0) {
        let value = array2.shift()
        merged.push(value * value)
    }

    return merged
}

let nums = [-5, -3, -1, 0, 1, 4, 5]
console.log(squareNumbrs(nums))
