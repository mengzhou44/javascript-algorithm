function capitalize(str) {
  let words = str
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1));
  return words.join(' ');
}

console.log(capitalize('here is a beautiful lake'));
