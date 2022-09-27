function biggerIsGreater(w) {
  let arr = w.split('');
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i].charCodeAt(0) > arr[i - 1].charCodeAt(0)) {
        
    }
  }

  return 'no answer';
}
console.log(biggerIsGreater('ab'))
console.log(biggerIsGreater('bb'));
console.log(biggerIsGreater('hefg'));

 
// hefg;
// dhck;
// dkhc;