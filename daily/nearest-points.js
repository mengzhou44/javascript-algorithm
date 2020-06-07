function nearestPoints(points, k, point) {
    points.sort((a, b) => distance(a, point) > distance(b, point))

    return points.slice(0, k)
}

function distance(point1, point2) {
    return Math.sqrt(
        Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
    )
}

console.log(
    nearestPoints(
        [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
        ],
        2,
        [0, 2]
    )
)
