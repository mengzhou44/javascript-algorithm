function zeroMatrix(m) {
    let zeros = [];

    let M = m.length;
    let N = m[0].length;

    function updateMatrix(m, i, j) {
        for (let row = 0; row < M; row++) {
            m[row][j] = 0;
        }

        for (let column = 0; column < N; column++) {
            m[i][column] = 0;
        }
    }

    for (let row = 0; row < M; row++) {
        for (let column = 0; column < N; column++) {
            if (m[row][column] === 0) {
                zeros.push({ row, column });
            }
        }
    }

    for (let { row, column } of zeros) {
        updateMatrix(m, row, column);
    }

    return m;
}


 let m = [
    [1,2,3,0],
    [5,6,7,8],
    [9,0,11,12],
    [13,14,15,16]
 ]

 
 let  result = zeroMatrix(m)

 console.log(result)