function findClosestElements(arr, k, x) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push({
            val: arr[i],
            distance: Math.abs(arr[i] - x),
        })
    }

    let temp = array.sort((a, b) => a.distance - b.distance).slice(0, k)
    return temp.map((item) => item.val).sort((a, b) => a - b)
}


*********
function findClosestElements(arr, k, x) {
  let queue=[]
  for(let i=0; i<arr.length; i++) {
        let distance =  Math.abs(arr[i] - x)
        let val = arr[i]
        insertToQueue(queue, {distance, val})
  }
 
  return queue.slice(0,k).map(item=> item.val).sort((a,b)=> a-b)
}

function insertToQueue(queue, {distance, val}) {
     
   if (queue.length === 0) {
        queue.push({distance, val})
        return 
   } 
  
   let index= queue.length-1
   queue.push(0)
   while(index>=0) {
       if (queue[index].distance>distance) {
           queue[index+1] = queue[index]
           index--
       } else {
           queue[index+1] ={distance,val}
           break
       }  
   }
   if (index === -1) {
        queue[0] ={distance,val}
   } 
 
}