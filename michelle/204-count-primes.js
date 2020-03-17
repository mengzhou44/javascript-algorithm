function countPrimes(n) {
    if (n <= 1) return 0

    let array = new Array(n).fill(null)

    array[0] = false
    array[1] = false

    for (i = 2; i < n; i++) {
        if (array[i] === null) {
            array[i] = true
            for (let j = i + i; j < n; j = j + i) {
                array[j] = false
            }
        }
    }

    return array.filter(item => item === true).length
}
