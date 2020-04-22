function largestRectangleArea(heights) {
  let sorted = [...heights].sort((a, b) => a - b)

  let area = 0
  let count = 0
  while (count < heights.length) {
      let height = sorted.shift()
      findMaxRectangleArea(heights, height)
      count++
  }
  
  return area
  
  function findMaxRectangleArea(heights, height) {
      let width = 0
      let maxWidth = 0 
      for (let i = 0; i < heights.length; i++) {
          if (heights[i] >= height) {
              width = width + 1
          } else {
              maxWidth = Math.max(maxWidth, width)
              width = 0
          }
      }
      maxWidth = Math.max(maxWidth, width)
      area= Math.max(area, height * maxWidth)
  }
}


********************

function largestRectangleArea(heights) {
  let n = heights.length
  let stack = [-1]
  
  let max = 0
  for(let i=0; i<n; i++) {
      while( peekStack(stack)!==-1 && 
             heights[peekStack(stack)] >=heights[i]) {
          max = Math.max(max, heights[stack.pop()] * (i- peekStack(stack)-1))
      }
      stack.push(i)
  }
 
  while(peekStack(stack)!==-1) {
       max = Math.max(max,
                      heights[stack.pop()] * (n- peekStack(stack)-1)
                     )
  }
  
 return max 
}
 
 
function peekStack(array) {
 if (array.length === 0)  return null
 return array[array.length-1]
}