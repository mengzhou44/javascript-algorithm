function  fillPaint(image, row, col, newColor){
      let oldColor =  image[row][col]
      
      function fillColor(image, row, col, newColor) {
           
             if (row<0 || col <0 || row>image.length-1  || col > image[0].length-1) {
                  return 
             }
           
             if (image[row][col] === oldColor) {
                  image[row][col] = newColor
                  fillColor(image, row+1, col,newColor)
                  fillColor(image, row-1, col,newColor)
                  fillColor(image, row, col+1,newColor)
                  fillColor(image, row, col-1,newColor)
             }
      }

      fillColor(image, row, col, newColor)
      return image 
}

let  image = [ 
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
]

 
let newImage = fillPaint(image, 1,1,2)
console.log(newImage)
