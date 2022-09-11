function testRepeat(arr) {
 
  let map = new Map();
  let maxCount = 0;
  for (let num of arr) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
    maxCount = Math.max(maxCount, map.get(num));
  }
  console.log(map)
  for (let num of arr) {
    if (map.get(num) === maxCount) return num;
  }
  return -1 
}


console.log(testRepeat([5,2,2,1,5]))