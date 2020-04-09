function chainedWords(words) {
    let head = startLetter(words[0])
    let tail = endLetter(words[0])
    if (words.length === 1) return head === tail

    words.shift()
    while (words.length > 0) {
        let found = words.find(word => word.endsWith(head))
        if (found !== undefined) {
            words = words.filter(item => item !== found)
            head = startLetter(found)
        } else {
            return false
        }

        found = words.find(word => word.startsWith(tail))
        if (found !== undefined) {
            words = words.filter(item => item !== found)
            tail = endLetter(found)
        } else {
            return false
        }
    }
    return head == tail
}

function startLetter(word) {
    return word[0]
}

function endLetter(word) {
    return word[word.length - 1]
}

console.log(chainedWords(['apple', 'eggs', 'snack', 'karat', 'tuna']))
