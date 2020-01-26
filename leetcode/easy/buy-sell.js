// var maxProfit = function(prices) {
//   let maxProfit= 0;
//   for(let i=prices.length-1; i>0; i--) {
//        for(let j=0; j< i;j++) {
         
//              if (prices[i] - prices[j]> maxProfit) {
//                   maxProfit = prices[i] - prices[j]
//              }
//        }
//   }
  
//   return maxProfit
// };


var maxProfit = function(prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER
  for(let i=0; i< prices.length; i++) {
      if (prices[i]<min) {
           min= prices[i]
      }
      max = Math.max(max, prices[i]-min)
  }
  return max
};