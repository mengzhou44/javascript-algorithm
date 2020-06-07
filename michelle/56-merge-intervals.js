/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    if (intervals.length === 0)  return []
    
     intervals.sort((a,b)=> a[0]-b[0]) 
    
     let result =[] 
     
     result.push(intervals.shift())
     
     while(intervals.length>0) {
         let next = intervals.shift()
         let current = result[result.length-1]
         if (current[1]<next[0]) {
             result.push(next)
         } else {
             if (current[1]<next[1]) {
                 result.pop()
                 result.push([current[0],next[1]])
             }
         }
     }
     return  result 
}
    
    