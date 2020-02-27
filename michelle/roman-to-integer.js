function romanToInt(str) {
  let map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  let result = 0
  let array = str.split('')
  while (array.length > 0) {
      if (array.length > 1 && map[array[0]] < map[array[1]]) {
          result += map[array[1]] - map[array[0]]
          array.shift()
      } else {
          result += map[array[0]]
      }
      array.shift()
  }

  return result
}