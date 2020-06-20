/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
    if (chars.length === 1) return 1

    let prev = chars[0]
    let index = 0
    let count = 1
    for (let i = 1; i < chars.length; i++) {
        if (prev === chars[i]) {
            count++
        } else {
            chars[index] = prev
            index++
            index = addCountToChars(chars, count, index)
            count = 1
            prev = chars[i]
        }
    }

    chars[index] = prev
    index++

    return addCountToChars(chars, count, index)
}

function addCountToChars(chars, count, index) {
    if (count === 1) return index

    let temp = count.toString().split('')

    for (let item of temp) {
        chars[index] = item
        index++
    }

    return index
}
