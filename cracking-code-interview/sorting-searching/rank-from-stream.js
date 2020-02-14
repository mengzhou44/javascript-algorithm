class RankNode {
    constructor(data) {
        this.data = data
        this.left_size = 0
        this.left = null
        this.right = null
    }

    insert(num) {
        if (num <= this.data) {
            if (this.left === null) {
                this.left = new RankNode(num)
            } else {
                this.left.insert(num)
            }
            this.left_size++
        } else if (num > this.data) {
            if (this.right === null) {
                this.right = new RankNode(num)
            } else {
                this.right.insert(num)
            }
        }
    }

    getRank(num) {
        if (num === this.data) {
            return this.left_size
        } else if (num < this.data) {
            if (this.left === null) {
                return -1
            }
            return this.left.getRank(num)
        } else {
            if (this.right === null) {
                return -1
            }
            return this.left_size + 1 + this.right.getRank(num)
        }
    }

    search(num) {
        if (num === this.data) {
            return this
        } else if (num < this.data) {
            if (this.left === null) {
                return null
            }
            return this.left.search(num)
        } else {
            if (this.right === null) {
                return null
            }
            return this.right.search(num)
        }
    }
}

let root = new RankNode(5)
root.insert(1)
root.insert(4)
root.insert(4)
root.insert(5)
root.insert(9)
root.insert(7)
root.insert(13)
root.insert(3)

console.log(root.getRank(5))

console.log(root.search(9))
