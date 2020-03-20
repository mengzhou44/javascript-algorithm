function climbStairs(n, cache = null) {
    if (n === 1) return 1

    if (n === 2) return 2

    if (cache === null) {
        cache = new Map()
    }
    if (cache.get(n) === undefined) {
        let temp = climbStairs(n - 1, cache) + climbStairs(n - 2, cache)
        cache.set(n, temp)
    }

    return cache.get(n)
}


function climbStairs(n) {
  if (n<=2)  return n
  let prev = 1
  let cur = 2
  for(let i=3; i<= n; i++) {
       temp= prev
       prev = cur
       cur = temp+cur
  }
  return cur
}