function commonChars(A) {
    if (A.length === 1) return A[0].split('')

    let first = A.shift().split('')

    let second = commonChars(A)

    return helper([...first], [...second])
}

function helper(array1, array2) {
    let result = []
    while (array1.length > 0) {
        let c = array1.shift()
        for (let i = 0; i < array2.length; i++) {
            if (array2[i] === c) {
                result.push(c)
                array2[i] = ''
                break
            }
        }
    }
    return result
}
