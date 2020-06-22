function minEatingSpeed(piles, H) {
    piles = piles.sort((a, b) => a - b)
    let lo = 1
    let hi = piles[piles.length - 1]
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2)
        let hoursTaken = eatPiles(piles, mid)
        if (hoursTaken > H) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return lo
}

function eatPiles(piles, speed) {
    let hours = 0
    for (let pile of piles) {
        hours += Math.ceil(pile / speed)
    }
    return hours
}
