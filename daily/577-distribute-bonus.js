function getBonuses(performance) {
      if (performance.length === 1) {
          return [1]
      }
      let result =[]

      for(let i=0; i<performance.length; i++) {
            
            let bonus = 1
            if (i-1>=0  &&  performance[i-1]<performance[i]) {
                 bonus++
            }
            if ( i <performance.length-1  &&  performance[i+1]< performance[i]) {
              bonus++
              if (i ===1) {
                console.log('bonus2')
               }
            }
            result.push(bonus)
      }

      return  result 
}



console.log(getBonuses([1, 2, 3, 2, 3, 5, 1]))
 