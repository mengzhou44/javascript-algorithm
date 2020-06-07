function reverseWords(s) {
    let array = s.trim().split(' ')
    let result = []
    for (let item of array) {
        let temp = item.trim()
        if (temp !== '') {
            result.unshift(temp)
        }
    }

    return result.join(' ')
}

function reverseWords(s) {
    let words = s.split(' ')
    let result = []
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== '') {
            result.push(words[i])
        }
    }

    return result.join(' ')
}
