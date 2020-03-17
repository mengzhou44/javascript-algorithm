function  merge(intervals) {
    if (intervals.length < 2) return intervals

    intervals = intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        mergeOverlap(result, intervals[i])
    }

    return result
}

function mergeOverlap(result, current) {
    let previous = result.pop()

    if (previous[1] >= current[1]) {
        result.push(previous)
    } else if (previous[1] >= current[0]) {
        let temp = [previous[0], current[1]]
        result.push(temp)
    } else {
        result.push(previous)
        result.push(current)
    }
}
