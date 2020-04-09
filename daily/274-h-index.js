function hIndex(citations) {
    if (citations.length === 0) return 0

    citations = citations.sort((a, b) => b - a)
    let l = 0
    let r = citations.length - 1
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (citations[mid] > mid + 1) {
            l = mid + 1
        } else {
            r = mid
        }
    }

    if (citations[r] >= r + 1) {
        return r + 1
    }

    return r
}
