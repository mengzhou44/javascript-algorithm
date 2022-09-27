var numDistinct = function (s, t) {
  // dp[i][j]   from 0: j of s  how many subsewuences of 0:i from t
  let m = s.length;
  let n = t.length;
  let dp = new Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(0);
  }

  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (t[i] === s[j]) {
        dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j];
      } else {
        dp[i + 1][j + 1] = dp[i + 1][j];
      }
    }
  }

  return dp[n][m];
};
