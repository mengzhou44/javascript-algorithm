function firstUniqChar(s) {
    let occurs = []

    for (let i = 0; i < s.length; i++) {
        const found = occurs.find(item => item.letter === s[i])
        if (found === undefined) {
            occurs.push({
                letter: s[i],
                index: i
            })
        } else {
            found.index = -1
        }
    }

    for (let item of occurs) {
        if (item.index !== -1) {
            return item.index
        }
    }

    return -1
}
