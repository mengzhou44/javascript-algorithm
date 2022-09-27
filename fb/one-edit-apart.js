function oneEditApart(str1, str2) {
  if (str1.length < str2.length) return oneEditApart(str2, str1);
  let diff = str1.length - str2.length;
  if (diff > 1) return false;

  if (str1.length === 1 && str2.length < 2) return true;

  if (diff == 0) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    return count === 1;
  } else {
   let count = 0 
    let p1 = 0;
    let p2 = 0;
    while (p1 < str1.length) {
      if (str1[p1] !== str2[p2]) {
        p1++;
        count++;
        if (count > 1) return false;
      } else {
        p1++;
        p2++;
      }
    }
    return true 
  }
}

console.log(oneEditApart('cat', 'dog'));
console.log(oneEditApart('cat', 'cats'));
console.log(oneEditApart('cat', 'cut'));
console.log(oneEditApart('cat', 'cast'));
console.log(oneEditApart('cat', 'at'));
console.log(oneEditApart('cat', 'act'));
