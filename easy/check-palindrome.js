function checkPalindrome(str) {
  let arr = str
    .split('')
    .filter((i) => i !== ' ')
    .map((letter) => letter.toLowerCase())
    .filter((letter) => {
      let index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
      return index >= 0 && index < 26;
    });

  console.log(arr);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(checkPalindrome('Was it a car or a cat I saw'));

console.log(checkPalindrome('Red -rum-, sir, -is-murder'));

console.log(checkPalindrome('I got up erly this morning!'));
