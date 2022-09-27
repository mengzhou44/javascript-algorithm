function lookAndSay(times) {
  let base = '1';
  for (let i = 0; i < times; i++) {
    base = say(base);
    console.log(base);
  }

  function say(base) {
    let prev = base[0];
    let count = 1;
    let res = '';
    for (let i = 1; i < base.length; i++) {
      if (base[i] === prev) {
        count++;
      } else {
        res += `${count}${prev}`;
        count = 1;
        prev = base[i];
      }
    }
    res += `${count}${prev}`;
    return res;
  }
}

console.log(lookAndSay(10))
