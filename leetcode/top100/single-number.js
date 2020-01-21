// var singleNumber = function(nums) {
//   const map ={}
//    for(let num of numbes) {
//         if (map[num]=== undefined) {
//            map[num] = num;
//         } else {
//            delete map[num]
//         }
//    }
//    let key = Object.keys(map)[0]
//    return map[key]
// };

var singleNumber = function(nums) {
  const unique = Array.from(new Set(nums));

  return 2 * getSum(unique) - getSum(nums);
};

function getSum(arr) {
  return arr.reduce((sum, item) => sum + item);
}
