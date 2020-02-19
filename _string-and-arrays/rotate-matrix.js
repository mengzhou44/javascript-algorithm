function rotate(m, size) {
      let output = []
      for (let i = 0; i<size; i++) {
          output.push([])  
          for (let j= 0; j<size; j++) {
             output[i].push(0)
          }
      }
      
      for(let row=0; row<size; row++) {
           for(let column=0; column<size; column++) {
               output[column][size-1-row] = m[row][column]
           }
      }

}