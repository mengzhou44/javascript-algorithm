function canAttendMeetings(intervals) {
  intervals = intervals.sort((a,b)=> a[0]-b[0])

  for(let i=1; i<intervals.length; i++) {
       if (isConflict(intervals[i-1], intervals[i])) {
             return false 
       }
  }

   return true 
}


function isConflict(interval1, interval2) {
     return interval1[1]>= interval2[0]
}


console.log(canAttendMeetings([[0,30],[5, 10],[15, 20]]))