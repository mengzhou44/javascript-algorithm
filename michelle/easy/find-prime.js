function findPrime(num) {
    let array = new Array(num + 1).fill(false)
    for (let i = 2; i <= num; i++) {
        for (let j = i + i; j <= num; j = j + i) {
            array[j] = true
        }
    }

    let result = []
    for (let i = 2; i <= num; i++) {
        if (array[i] === false) {
            result.push(i)
        }
    }

    return result
}

console.log(findPrime(14))
