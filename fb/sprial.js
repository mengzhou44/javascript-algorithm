function generateSprial(n) {
  if (n < 0) throw new Error('n must be positve');

  let limit = n * n;
  let val = 1;
  let r = 0;
  let c = 0;
  let dc = [1, 0, -1, 0];
  let dr = [0, 1, 0, -1];
  let arr = new Array(n);
  let dir = 0;
  for (let row = 0; row < n; row++) {
    arr[row] = new Array(n).fill(0);
  }

  while (val <= limit) {
    arr[r][c] = val;
    r += dr[dir];
    c += dc[dir];
    if (!isValid(r, c)) {
      r -= dr[dir];
      c -= dc[dir];
      dir = (dir + 1) % 4;
      r += dr[dir];
      c += dc[dir];
    }
    val++;
  }

  return arr; 

  function isValid(row, col) {
     if (row<0 || row>=n || col<0 || col>=n || arr[row][col]!== 0) return false 
     return true 
  }
}

console.log(generateSprial(4))

