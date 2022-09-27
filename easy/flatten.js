// const flatten = (arr)=> {
     
//     if (arr.length ===0) return [] 

//     let res=[] 
//     for(let item of arr) {
//          if (Array.isArray(item) ) {
//              res = [...res, ...flatten(item)]
//          }else{
//              res.push(item)
//          }
//     }

//     return res 

// }


const flatten = (arr)=> {
     
     let res=[] 

     for(let item of arr) {
         if (Array.isArray(item)) {
             
         }
     }
    

}



console.log(flatten([1,2,[3,4], 5]))