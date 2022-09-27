/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let result =[]
  for(let i=0; i<=num; i++ ) {
      result.push(getBits(i))
  }
  return result
};


function getBits(i) {
  if (i===0)  return 0;
  if (i===1 ) return 1; 
  if (i===2 ) return 1; 
 
   let temp = Math.floor(Math.log2(i));
   return 1+getBits(i-Math.pow(2, temp)) 
}