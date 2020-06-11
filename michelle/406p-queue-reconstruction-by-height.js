/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
    people.sort((a, b) => b[0] - a[0])

    let result = []
    while (people.length > 0) {
        let cur = removeHighest(people)
        result = mergeCurrentToResult(cur, result)
    }
    return result
}

function removeHighest(people) {
    if (people.length === 0) return []
    let height = people[0][0]
    let result = []
    while (people.length > 0) {
        if (people[0][0] >= height) {
            result.push(people.shift())
        } else {
            break
        }
    }
    return result.sort((a, b) => a[1] - b[1])
}

function mergeCurrentToResult(cur, result) {
    if (result.length === 0) {
        result = cur
    } else {
        for (let item of cur) {
            result.splice(item[1], 0, item)
        }
    }
    return result
}
