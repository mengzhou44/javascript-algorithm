function countAndSay(n) {
    if (n === 1) return '1'
    let seq = countAndSay(n - 1)
    return getNextSeq(seq)
}

function getNextSeq(seq) {
    let count = 0
    let val = seq[0]
    let result = ''
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === val) {
            count++
        } else {
            result += count + val
            val = seq[i]
            count = 1
        }
    }
    result += count + val
    return result
}
