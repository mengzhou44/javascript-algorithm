function reconstructQueue(people) {
    people = sortPeople(people)
    let result = []
    while (people.length > 0) {
        let cur = removeHighest(people)
        result = mergeToResult(result, cur)
    }
    return result
}

function sortPeople(people) {
    return people.sort((a, b) => b[0] - a[0])
}

function removeHighest(people) {
    let temp = people[0][0]
    let result = []
    while (people.length > 0 && people[0][0] === temp) {
        result.push(people.shift())
    }
    return result
}

function mergeToResult(result, cur) {
    cur = cur.sort((a, b) => a[1] - b[1])
    if (result.length === 0) {
        return cur
    }

    for (let item of cur) {
        result.splice(item[1], 0, item)
    }

    return result
}
