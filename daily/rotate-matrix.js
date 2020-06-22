// Hi, here's your problem today. This problem was recently asked by Uber:

// Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.

// Here's an example and some starting code:

// def rotate(mat):
//   # Fill this in.

// mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// # Looks like
// # 1 2 3
// # 4 5 6
// # 7 8 9

// # Looks like
// # 7 4 1
// # 8 5 2
// # 9 6 3
// print(rotate(mat))
// # [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// a[i][j] = > a[j][n-1-i]
// a[j][n-1-i] => a[n-1-i][n-1-j]
// a[[n-1-i][n-1-j] => a[n-1-j][i]
// a[n-1-j][i] => a[i][j]

function rotateMatrix(a) {
    let n = a.length
    let result = []

    for (let i = 0; i < n; i++) {
        let row = []
        for (let j = 0; j < n; j++) {
            row.push(a[n - 1 - j][i])
        }
        result.push(row)
    }
    return result
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(rotateMatrix(matrix))
