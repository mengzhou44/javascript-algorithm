function kClosest(points, K) {
    let array = []
    for (let point of points) {
        let distance = point[0] * point[0] + point[1] * point[1]

        array.push({
            point,
            distance,
        })
    }

    array.sort((a, b) => a.distance - b.distance)
    return array.slice(0, K).map((item) => item.point)
}
