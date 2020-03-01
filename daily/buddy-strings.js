function buddyStrings(str1, str2) {
    if (str1.length !== str2.length) return false

    if (str1.length < 2) return false

    for (let i = 0; i < str1.length - 1; i++) {
        for (let j = 0; j < str1.length; j++) {
            let temp = swap(str1, i, j)
            if (temp === str2) {
                return true
            }
        }
    }

    return false
}

function swap(str, i, j) {
    let temp = []
    for (let k = 0; k < str.length; k++) {
        if (k === i) {
            temp.push(str[j])
        } else if (k === j) {
            temp.push(str[i])
        } else {
            temp.push(str[k])
        }
    }

    return temp.join('')
}
