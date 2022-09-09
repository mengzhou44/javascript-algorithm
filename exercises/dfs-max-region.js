function findMaxRegion(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let maxRegion = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 1) {
        maxRegion = Math.max(maxRegion, dfs(r, c));
      }
    }
  }
  return maxRegion;

  function dfs(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) return 0;
    if (matrix[row][col] === 0) {
      return 0;
    }
    let size = 1;
    matrix[row][col] = 0;
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        size += dfs(r, c);
      }
    }
    return size 
  }
}

let matrix = [
  [0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
];

console.log(findMaxRegion(matrix));
