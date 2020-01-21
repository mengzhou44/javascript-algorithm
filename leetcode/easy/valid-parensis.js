class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }
}

var isValid = function(s) {
  let  stack = new Stack();
  for (let letter of s) {
    if (['(', '[', '{'].includes(letter) === true) {
      stack.push(letter);
    } else {
       if (stack.size() === 0)  return false; 

      switch (stack.pop()) {
        case '{':
          if (letter !== '}') {
            return false;
          }
          break;
        case '[':
          if (letter !== ']') {
            return false;
          }
          break;
        case '(':
          if (letter !== ')') {
            return false;
          }
          break;
      }
    }
  }

  return stack.size() === 0;
};

const valid = isValid(']');

console.log(valid);
