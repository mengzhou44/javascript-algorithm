function maxSumTwoNoOverlap(A, L, M) {
    let result = Number.MIN_SAFE_INTEGER

    let map = new Map()
    let sum = 0
    for (let i = 0; i < A.length; i++) {
        sum += A[i]
        map.set(i, sum)
    }
    map.set(-1, 0)

    for (let i = 0; i <= A.length - L; i++) {
        for (let j = 0; j <= A.length - M; j++) {
            if (i <= j && j < i + L) {
                continue
            }
            if (i >= j && j + M > i) {
                continue
            }
            let temp = sumBlock(map, i, L) + sumBlock(map, j, M)
            result = Math.max(result, temp)
        }
    }

    return result

    function sumBlock(map, index, length) {
        return map.get(index + length - 1) - map.get(index - 1)
    }
}
