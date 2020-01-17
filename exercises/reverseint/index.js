// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
     const sign = Math.sign(n)
     let number = Math.abs(n);
     const array = number.toString().split("");
     let result ='';
     for(let item of array) {
          result = item +result;
     }
     return  parseInt(result) *sign;
}

module.exports = reverseInt;
