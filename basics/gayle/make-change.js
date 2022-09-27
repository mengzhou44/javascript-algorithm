function makeChange(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i < dp.length; i++) {
      if (i >= coin) {
        dp[i] += dp[i - coin];
      }
    }
  }
  return dp[amount];
}

console.log(makeChange(5, [1, 2, 5]));

// 5 
// 1 1 1 2
// 1 2 2 
// 1 1 1 1 1 

