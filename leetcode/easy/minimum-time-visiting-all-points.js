/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  if (points.length === 1 ||  points.length === 0)   {
      return 0
  }

 let total = 0;
 for(let i=0; i<points.length-1; i++) {
       let horizintal = Math.abs(points[i+1][0] - points[i][0])
       let vertical = Math.abs(points[i+1][1] - points[i][1])
       total += Math.max(horizintal, vertical)
 }

return total;
};