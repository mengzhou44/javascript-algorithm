function gridSearch(G, P) {
  let m = G.length;
  let n = G[0].length;

  let pm = P.length;
  let pn = P[0].length;

 
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (dfs(row, col)) {
        return 'YES';
      }
    }
  }
  return 'NO';

  function dfs(row, col, rowDelta = 0, colDelta = 0) {

    if (row + rowDelta >= m || col + colDelta >= n) return false
    if (rowDelta >= pm || colDelta >= pn) return false 
    if (G[row + rowDelta][col + colDelta] !== P[rowDelta][colDelta])
      return false;

      if  (!dfs(row, col, rowDelta + 1, colDelta)  || !dfs(row, col, rowDelta, colDelta + 1)  return false 
     
      return true 

  }
}

const G = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const P = [
  [8, 7, 6, 5, 4, 3],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(gridSearch(G, P));
