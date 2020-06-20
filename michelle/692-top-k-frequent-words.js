function topKFrequent(words, k) {
    let array = []
    for (let word of words) {
        let found = array.find((item) => item.word === word)
        if (found === undefined) {
            array.push({ word, count: 1 })
        } else {
            found.count++
        }
    }
    sortArray(array)

    return array.slice(0, k).map((item) => item.word)
}

function sortArray(array) {
    array.sort((a, b) => {
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
        if (a.word > b.word) return 1

        return -1
    })
}
