function beautifulTriplets(d, a) {
  let temp = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] - a[i] === d) {
       
        temp.push([i, j]);
      }
    }
  }
 
  let count = 0;
  for (let i = 0; i < temp.length; i++) {
     for(let j=i+1; j<temp.length; j++) {
         if (temp[j][0] === temp[i][1]) {
             count++
         }
     }
  }

  return count;
}


console.log(beautifulTriplets(1, [2,2,3,4,5]))