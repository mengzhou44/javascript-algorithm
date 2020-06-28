function ladderLength(beginWord, endWord, wordList) {
    let array = [beginWord]
    let steps = 1
    while (array.length > 0) {
        let levelSize = array.length
        let count = 0
        steps++
        while (count < levelSize) {
            let current = array.shift()
            wordList = wordList.filter((item) => item !== current)

            let temp = wordList.filter((item) => isOneLetterDiff(item, current))
            wordList = wordList.filter((item) => !temp.includes(item))

            if (temp.includes(endWord)) {
                return steps
            }

            for (let word of temp) {
                array.push(word)
            }
            count++
        }
    }

    return 0
}

function isOneLetterDiff(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            count++
        }
    }
    return count === 1
}
