/**
 * @param {string[]} grid
 * @return {number}
 */
class DSU {
    constructor(N) {
        this.parents = new Array(N)
        for (let i = 0; i < N; i++) {
            this.parents[i] = i
        }
    }

    find(x) {
        if (this.parents[x] !== x) {
            this.parents[x] = this.find(this.parents[x])
        }
        return this.parents[x]
    }

    union(x, y) {
        this.parents[this.find(x)] = this.find(y)
    }
}

function regionsBySlashes(grid) {
    let N = grid.length
    let dsu = new DSU(4 * N * N)
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            let root = 4 * (r * N + c)
            let val = grid[r][c]

            if (val !== '\\') {
                dsu.union(root + 0, root + 1)
                dsu.union(root + 2, root + 3)
            }
            if (val !== '/') {
                dsu.union(root + 0, root + 2)
                dsu.union(root + 1, root + 3)
            }

            if (r + 1 < N) {
                dsu.union(root + 3, root + 4 * N + 0)
            }
            if (r - 1 >= 0) {
                dsu.union(root + 0, root - 4 * N + 3)
            }

            if (c + 1 < N) {
                dsu.union(root + 2, root + 4 + 1)
            }
            if (c - 1 >= 0) {
                dsu.union(root + 1, root - 4 + 2)
            }
        }
    }

    let result = 0
    for (i = 0; i < 4 * N * N; i++) {
        if (dsu.find(i) === i) {
            result++
        }
    }
    return result
}
