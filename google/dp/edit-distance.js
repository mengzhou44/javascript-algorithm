const minDistance = function (A, B) {
  let m = A.length + 1;
  let n = B.length + 1;

  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(-1);
  }

  return helper(m, n);

  function helper(i, j) {
    if (i < 0 || j < 0) return 0;

    if (i === 0) return j;
    if (j === 0) return i;
 

    if (dp[i-1][j-1] >= 0) return dp[i-1][j-1];

    if (A[i - 1] === B[j - 1]) {
      res = helper(i - 1, j - 1);
    } else {
      res =
        Math.min(helper(i - 1, j - 1), helper(i - 1, j), helper(i, j - 1)) + 1;
    }
    dp[i-1][j-1] = res;

    return res;
  }
};


console.log(minDistance('A', 'B'))