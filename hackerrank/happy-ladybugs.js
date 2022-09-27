function happyLadybugs(b) {
  if (b.includes('_')) {
    let map = new Map();
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== '_') {
        if (!map.has(b[i])) {
          map.set(b[i], 1);
        } else {
          map.set(b[i], map.get(b[i]) + 1);
        }
      }
    }
    console.log(map)
    for (let key of map.keys()) {
      if (map.get(key) === 1) return 'NO';
    }

    return 'YES';
  } else {
    for (let i = 0; i < b.length; i++) {
      if (i === 0) {
        if (b[i] !== b[i + 1]) return 'NO';
      }
      if (i === b.length - 1) {
        if (b[i] !== b[i - 1]) return 'NO';
      }

      if (b[i] !== b[i - 1] && b[i] !== b[i + 1]) return 'NO';
    }
    return 'YES';
  }
}


console.log(happyLadybugs('RBY_YBR'));