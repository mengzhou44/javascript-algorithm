function surfaceArea(A) {
  let rows = A.length;
  let cols = A[0].length;

  let area = rows * cols * 2; // initially

  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 || row === rows - 1) {
        area += A[row][col];
      } else {
        area += Math.abs(A[row][col] - A[row - 1][col]);
      }
    }
  }

  for (let col = 0; col <= cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (col === 0 || col === cols - 1) {
        area += A[row][col];
      } else {
        area += Math.abs(A[row][col] - A[row][col - 1]);
      }
    }
  }

  return area;
}
