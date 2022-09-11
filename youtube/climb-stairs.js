// suppose you can cllim  1, 2 or 3 stairs at one time.

var climbStairs = function (n) {
  let cache = new Map();
  return helper(n);

  function helper(n) {
    if (cache.has(n)) return cache.get(n);
    if (n === 1) return 1;
    if (n === 2) return 2;
    let res = helper(n - 1) + helper(n - 2);
    cache.set(n, res);
    return res;
  }
};

var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
};

console.log(countPaths(100));
