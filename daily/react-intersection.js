class Rectangle {
    constructor(minX, minY, maxX, maxY) {
        this.minX = minX
        this.minY = minY
        this.maxX = maxX
        this.maxY = maxY
    }
}

function intersectionArea(rect1, rect2) {
    let width = Math.max(
        0,
        Math.min(rect2.maxX, rect1.maxX) - Math.max(rect2.minX, rect1.minX)
    )

    let height = Math.max(
        0,
        Math.min(rect2.maxY, rect1.maxY) - Math.max(rect2.minY, rect1.minY)
    )

    return height * width
}

const rect1= new Rectangle(0,0,3,2)
const rect2= new Rectangle(1,1,3,3)
console.log(intersectionArea(rect1, rect2))
