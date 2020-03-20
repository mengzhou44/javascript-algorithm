function minMeetingRooms(intervals) {
     let rooms =[[intervals[0]]] 
     intervals = intervals.sort((a,b)=>a[0]-b[0])

     for (let i=1; i<intervals.length; i++) {
          assignMeetingToRooms(rooms,intervals[i])
     }

     return rooms.length
}

function  assignMeetingToRooms(rooms,interval) {
     let index = 0
     while (index<rooms.length) {
          let room =  rooms[index] 
          if (room[room.length-1][1] >interval[0]) {
             room.push(interval)
             retrun 
          }  
          index++
     }
    
     rooms.push([interval])
}

console.log(minMeetingRooms([30,75], [0,50], [60,150]))

 