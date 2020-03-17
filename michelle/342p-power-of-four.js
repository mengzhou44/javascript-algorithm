var isPowerOfFour = function(num) {
  return num > 0 && (num & (num - 1)) === 0  &&   (num & 0x55555555) !== 0

};
function isPowerOfTwo(n) {
    return  n>0 && (n &(n-1)) === 0
}

 
console.log(isPowerOfFour(17))
console.log(isPowerOfTwo(10))