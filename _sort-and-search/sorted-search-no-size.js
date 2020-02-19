class List {
    constructor(data = []) {
        this.data = data
    }

    elementAt(index) {
        if (index > this.data.length - 1) {
            return -1
        }
        return this.data[index]
    }
}

function search(list, val) {
    if (list.elementAt(0) === -1) {
        throw 'not found!'
    }
    if (list.elementAt(0) === val) {
        return 0
    }

    let startIndex = 1
    while (list.elementAt(startIndex) !== -1) {
        startIndex = startIndex * 2
    }

    return binarySearch(list, val, 0, startIndex)
}

function binarySearch(list, val, start, end) {
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
      
        if (list.elementAt(mid) === -1 || list.elementAt(mid) > val) {
            end = mid - 1
        } else if (list.elementAt(mid) < val) {
            start = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

let list = new List([23, 45, 47, 49, 81, 99])

let foundIndex = search(list, 49)

console.log(foundIndex)
