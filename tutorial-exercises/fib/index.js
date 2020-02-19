function slowFib(n) {
  if (n === 0 || n == 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memorize(fn) {
  let cache = {};
  return function(...args) {
    if (cache[args] !== undefined) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const fib = memorize(slowFib);

module.exports = fib;
