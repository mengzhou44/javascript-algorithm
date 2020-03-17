var findRadius = function(houses, heaters) {
    houses = houses.sort((a, b) => a - b)
    heaters = heaters.sort((a, b) => a - b)

    let radius = 0
    let i = 0
    for (house in houses) {
        while (i < heaters.length && heaters[i] < house) {
            i = i + 1
        }
        if (i === 0) {
            radius = Math.max(radius, heaters[i] - house)
        } else if (i === heaters.length) {
            radius = Math.max(
                radius,
                houses[houses.length - 1] - heaters[heaters.length - 1]
            )
        } else {
            radius = Math.max(
                radius,
                Math.min(heaters[i] - house, house - heaters[i - 1])
            )
        }
    }

    return radius
}
