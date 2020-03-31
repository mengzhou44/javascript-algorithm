var angleClock = function(hour, minutes) {
    hour = hour + minutes / 60

    if (hour >= 12) {
        hour = hour - 12
    }

    let angle1 = (hour / 12) * 360

    let angle2 = (minutes / 60) * 360

    let result = Math.abs(angle1 - angle2)

    if (result > 180) {
        return 360 - result
    }

    return result
}
