function rotateString(A, B) {
    if (A === '' && B === '') return true
    let temp = A + A
    for (let i = 0; i < A.length; i++) {
        let str = temp.substring(i, i + A.length)

        if (str === B) {
            return true
        }
    }

    return false
}
