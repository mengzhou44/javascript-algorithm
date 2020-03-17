function addDigits(num) {
    let array = num.toString().split('')

    while (array.length > 1) {
        let sum = array.reduce((total, item) => total + parseInt(item), 0)

        array = sum.toString().split('')
    }

    return parseInt(array[0])
}
