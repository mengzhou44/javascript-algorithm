function isBalanced(str) {
  let opens = '([{';

  let stack = [];
  for (let ch of str) {
    if (opens.includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      let open = stack.pop();
      if (!isMatched(open, ch)) return false;
    }
  }
  return stack.length === 0;

  function isMatched(open, close) {
    if (open === '(' && close === ')') return true;
    if (open === '[' && close === ']') return true;
    if (open === '{' && close === '}') return true;

    return false;
  }
}


console.log(isBalanced('{()}')) 

 console.log(isBalanced('){()}')); 

console.log(isBalanced('{([)}')); 