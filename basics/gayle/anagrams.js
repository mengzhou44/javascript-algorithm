// function letteresToRemove(word1, word2) {
//   let map = new Map();

//   for (let ch of word1) {
//     if (!map.has(ch)) {
//       map.set(ch, 1);
//     } else {
//       map.set(ch, map.get(ch) + 1);
//     }
//   }
//   let lettersNotInWord1 = [];
//   for (let ch of word2) {
//     if (!map.has(ch)) {
//       lettersNotInWord1.push(ch);
//       map.set(ch, 1);
//     } else {
//       if (lettersNotInWord1.includes(ch)) {
//         map.set(ch, map.get(ch) + 1);
//       } else {
//         map.set(ch, map.get(ch) - 1);
//       }
//     }
//   }
//   console.log({ map });
//   return Array.from(map.values()).reduce((sum, item) => sum + Math.abs(item));
// }

function letteresToRemove(word1, word2) {
  let charCounts1 = findCharCounts(word1);
  let charCounts2 = findCharCounts(word2);

  let sum = 0;
  for (let i = 0; i < 26; i++) {
    sum += Math.abs(charCounts1[i] - charCounts2[i]);
  }
  return sum;
}

function findCharCounts(word) {
  let arr = new Array(26).fill(0);
  for (let ch of word) {
    let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    arr[index]++;
  }
  return arr;
}

let word1 = 'hello';
let word2 = 'billion';
console.log(letteresToRemove(word1, word2));
