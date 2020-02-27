function reverse(num) {
    let sign = Math.sign(num)
    let str = Math.abs(num).toString()
    let array = []
    for (let c of str) {
        array.unshift(c)
    }
    let temp = array.join('')

    if (sign < 0) {
        temp = '-' + temp
    }
    let result = parseInt(temp)

    if (result > 2147483647 || result < -2147483647) {
        return 0
    }

    return result
}
