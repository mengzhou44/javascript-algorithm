// function rearrangeString(str) {
//     function dfs(array) {
//         let available = array.filter((item) => item.visited === false)

//         if (available.length === 0) {
//             return true
//         }

//         for (let i = 0; i < available.length; i++) {
//             if (result === '') {
//                 result = available[i].letter
//                 available[i].visited = true
//             } else if (available[i].letter !== result[result.length - 1]) {
//                 result = result + available[i].letter
//                 available[i].visited = true

//                 if (dfs(array)) {
//                     return true
//                 }
//                 result = result.substring(0, result.length - 1)
//                 available[i].visited = false
//             }
//         }

//         return false
//     }

//     let temp = str.split('')
//     let array = temp.map((item) => {
//         return { visited: false, letter: item }
//     })
//     let result = ''
//     dfs(array, result)
//     return result
// }




function rearrangeString(str) {
     let array = str.split('')
     array= array.map(item=> {  
        return {
          letter: item,
          visited: false
         }
     })
     let result = []
     dfs(array)
     return result.join('')
     
     function dfs(array) {
         let available = array.filter(item=> item.visited === false)
         
         if (available.length === 0 ) return true

         for(let item of available) {
             if (result.length>0 && item.letter === result[result.length-1]) {
                 continue
             }
             result.push(item.letter)
             item.visited = true
          
             if (dfs(array))  return true 

             result.pop()
             item.visited= false     
         }
         return false 
    }
}

console.log(rearrangeString('abbccc'))

