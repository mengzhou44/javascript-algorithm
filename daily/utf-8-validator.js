function utf8Validate(nums) {
    while (nums.length > 0) {
        let num = nums.shift()
        let byteType = getByteType(num)
        if (byteType === -1)  return false 
        for (let i = 0; i < byteType - 1; i++) {
            if (nums.length === 0) return false
            let temp = nums.shift()
            if (!startsWith10(temp)) {
                return false
            }
        }
    }
    return true
}

function getByteType(num) {
    let temp = num.toString(2)
    if (temp.startsWith('110')) {
        return 2
    } else if (temp.startsWith('1110')) {
        return 3
    } else if (temp.startsWith('11110')) {
        return 4
    } else if (temp.startsWith('10')) {
        return -1
    }

    return 1
}

function startsWith10(num) {
    let temp = num.toString(2)
    return temp.startsWith('10')
}

console.log(utf8Validate([0b00000000]))

console.log(utf8Validate([0b00000000, 0b10000000]))

console.log(utf8Validate([0b11000000, 0b10000000]))
