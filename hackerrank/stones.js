function stones(n, a, b) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let item = a * i + b * (n - 1 - i);
    if (!arr.includes(item)) {
       arr.push(item);
    }
 
  }
  return arr.sort((i, j) => i - j);
}


console.log(stones(73, 25, 25 ))

 