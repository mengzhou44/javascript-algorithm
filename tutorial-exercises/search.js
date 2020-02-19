function search(sorted, num) {
    let start = 0
    let end = sorted.length - 1

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2)
        if (sorted[mid] === num) {
            return mid
        } else if (sorted[mid] < num) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
}

function searchRecursively(sorted, num, start = 0, end = sorted.length - 1) {
    if (start > end) {
        return -1
    }
    let mid = start + Math.floor((end - start) / 2)
    if (sorted[mid] === num) {
        return mid
    } else if (sorted[mid] > num) {
        return searchRecursively(sorted, num, start, mid - 1)
    }

    return searchRecursively(sorted, num, mid + 1, end)
}

let sorted = [23, 45, 67, 89]
console.log(search(sorted, 67))
console.log(searchRecursively(sorted, 67))
