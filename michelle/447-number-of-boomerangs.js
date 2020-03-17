var numberOfBoomerangs = function(points) {
    if (points.length < 3) return 0
    let result = 0

    for (let pointA of points) {
        let map = new Map()
        for (let pointB of points) {
            if (pointA[0] === pointB[0] && pointA[1] === pointB[1]) continue

            let temp1 = (pointB[0] - pointA[0]) * (pointB[0] - pointA[0])
            let temp2 = (pointB[1] - pointA[1]) * (pointB[1] - pointA[1])
            let d = temp1 + temp2
            if (map.get(d)) {
                result = result + map.get(d)
                map.set(d, map.get(d) + 1)
            } else {
                map.set(d, 1)
            }
        }
    }

    return result * 2
}
