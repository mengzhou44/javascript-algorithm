var numTrees = function (n) {
  let cache = new Map();
  cache.set(0, 1);
  cache.set(1, 1);
  cache.set(2, 2);

  return helper(n);

  function helper(n) {
    if (cache.has(n)) return cache.get(n);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += helper(i - 1) * helper(n - i);
    }
    cache.set(n, sum);
    return sum;
  }
};
