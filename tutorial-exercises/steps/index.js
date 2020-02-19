// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function printStep(i, n) {
//      let temp = [];
//      for(let k=1; k<=n; k++) {
//          if (k<=i) {
//             temp.push("#")
//          } else {
//             temp.push(" ")
//          }
//      }

//       console.log(temp.join(""))
// }

// function steps(n) {
//     if (n<=0) throw "n must be postive"
//      for(let row=1; row<= n; row++) {
//          let stair=''
//          for(let column =1; column<=n; column++) {
//             if (column<=row) {
//                stair=stair+ "#"
//             }else {
//               stair=stair+ " "
//             }
//          }
//          console.log(stair)
//      }
// }

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length<= row) {
    stair = stair + '#';
  } else {
    stair = stair + ' ';
  }
  steps(n, row, stair);
}
 

module.exports = steps;
