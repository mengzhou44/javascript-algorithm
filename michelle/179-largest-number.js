function largestNumber(nums) {
    let temp = nums.map((item) => item.toString())
    let sorted = temp.sort((a, b) => {
        let str1 = a + b
        let str2 = b + a
        if (str1 > str2) return -1
        return 1
    })

    if (sorted[0] === '0') return '0'

    return sorted.join('')
}
