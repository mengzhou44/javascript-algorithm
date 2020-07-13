// given an array of meeting time intervals, determine if a person could attend all meetings

function canAttendAll(meetings)
{

      if (meetings.length <2)  return true 

      for(let i=0; i<meetings.length-1; i++) {
          for (let j=i+1; j<meetings.length; j++) {
             if (isConflict(meetings[i], meetings[j])) {
                return false 
             }
          }
      }
      return true 

}


function isConflict(m1, m2) {
     let [start1, end1] = m1 
     let [start2, end2] = m2 
     
     if (start1>start2)  return isConflict(m2, m1)

     return  start2<end1 
}

console.log(canAttendAll([[0,30], [5,10], [10,20]]))

console.log(canAttendAll([[7,10], [2,4]]))