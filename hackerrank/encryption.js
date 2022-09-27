function encryption(s) {
  s = s.replace(' ', '');
  let length = s.length;
  let cols = Math.ceil(Math.sqrt(length));

  let matrix =[]
  
let row = 0 
  for (let cur = 0; cur < length; cur++) {
     row = Math.floor(cur / cols);
    let col = cur % cols;

    if (col === 0) {
         matrix.push(new Array(cols).fill(''))
    }
    matrix[row][col] = s[cur];
  }

  let rows = row+1 

  let res = [];
  for (let col = 0; col < cols; col++) {
    let word = '';
    for (let row = 0; row < rows; row++) {
      word += matrix[row][col];
    }
    res.push(word);
  }

  return res.join(' ');
}


console.log(encryption('chillout'));