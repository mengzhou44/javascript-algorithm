function topKFrequent(words, k) {
    let map = {}
    for (let word of words) {
        if (map[word] === undefined) {
            map[word] = {
                word,
                count: 0,
            }
        }
        map[word].count++
    }

    let heap = new MiniHeap(k, (a, b) => {
        if (a.count === b.count) {
            return compareWords(a.word, b.word)
        }
        return b.count - a.count
    })

    for (let key of Object.keys(map)) {
        heap.push(map[key])
    }
    let result = []
    while (heap.peek()) {
        let item = heap.pop()
        result.unshift(item.word)
    }
    return result
}

function compareWords(w1, w2) {
    if (w1 < w2) return -1
    if (w1 > w2) return 1

    return 0
}

class MiniHeap {
    constructor(k, compare) {
        this.size = k
        this.list = []
        this.compare = compare
    }
    peek() {
        if (this.list.length === 0) {
            return null
        }
        return this.list[this.list.length - 1]
    }
    push(item) {
        this.list.push(item)
        this.list.sort((a, b) => this.compare(a, b))
        if (this.list.length > this.size) {
            this.list.pop()
        }
    }
    pop() {
        return this.list.pop()
    }
}
