/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    piles = piles.sort((a, b) => a - b)

    let maxSpeed = piles[piles.length - 1]
    let minSpeed = 0

    while (minSpeed <= maxSpeed) {
        let mid = Math.floor((maxSpeed + minSpeed) / 2)
        let hours = 0
        for (let pile of piles) {
            hours += Math.ceil(pile / mid)
        }
        if (hours > H) {
            minSpeed = mid + 1
        } else {
            maxSpeed = mid - 1
        }
    }

    return minSpeed
}
