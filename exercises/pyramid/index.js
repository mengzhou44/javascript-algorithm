// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function printLevel(row, n) {
//   let level ='';
//   for(let column =0; column<2*n -1; column++ ) {
//      if (column <n - row - 1) {
//         level = level+ ' '
//      }else if (column< n+row) {
//       level = level+ '#'
//      } else {
//       level = level+ ' '
//      }
//   }
//   console.log(level);
// }

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     printLevel(row, n);
//   }
// }

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  if (level.length < n - row - 1) {
    level = level + ' ';
  } else if (level.length < n + row) {
    level = level + '#';
  } else {
    level = level + ' ';
  }

  pyramid(n, row, level);
}

pyramid(3);

module.exports = pyramid;
