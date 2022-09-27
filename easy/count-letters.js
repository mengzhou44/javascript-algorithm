// return the first word  withthe maxmium repeated letters

function countLetters(str) {
  let words = str.split(' ');
  let temp = {
    word: '',
    maxSize: 0,
  };
  for (let word of words) {
    let maxSize = findMaxLetters(word);
    if (temp.maxSize < maxSize) {
      temp = {
        word,
        maxSize,
      };
    }
  }

  return temp.word;
}

function findMaxLetters(word) {

  let maxCount = 0;
  let map = new Map();
  for (let ch of word) {
     if (!map.has(ch)) {
         map.set(ch, 1 )
     }else {
         map.set(ch, map.get(ch)+1)
     }
    maxCount = Math.max(maxCount, map.get(ch));
  }
  console.log(word, maxCount)
  console.log(map)
  return maxCount
}

console.log(countLetters('Javascript is grrreating programming language!'));
