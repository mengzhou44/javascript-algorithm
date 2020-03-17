var isPalindrome = function(s) {
    let temp = s.split('').filter(c => isAlphanumeric(c))
    if (temp.length < 2) return true

    let left = 0
    let right = temp.length - 1

    while (left <= right) {
        if (temp[left].toLowerCase() !== temp[right].toLowerCase()) {
            return false
        } else {
            left++
            right--
        }
    }

    return true
}

function isAlphanumeric(c) {
    const letters = /^[0-9a-zA-Z]+$/
    return c.match(letters)
}
