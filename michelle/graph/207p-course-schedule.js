/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function  canFinish(numCourses, prerequisites) {
    let map = new Map()
     let cache =[]
    for (let course = 0; course<numCourses; course++) {
        let temp = prerequisites
                  .filter(item=> item[0] === course)
                  .map(item=> item[1])
          
        if (temp.length>0) {
            map.set(course, temp)
        }
    }
 
    for(let course of map.keys()) {
        if (dfs(course) === true) {
            return false 
        }
    }
 
   return true 
 
   function dfs(course,visited=[])  {
        if (cache.includes(course)) return false 
       
        if (!map.has(course)) return false 
               
        if (visited.includes(course))  {
            return true 
        }
        visited.push(course)
        
        let  required = map.get(course)
        for(let item of required) {
             if (dfs(item,[...visited])) {
                 return true 
             }
        }
        cache.push(course)
        return false 
   }
 
}


************

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 
function  canFinish(numCourses, prerequisites) {
    let inDegrees = new Array(numCourses).fill(0)
    let map = new Map()
    let queue = [] 
    for(let course = 0; course<numCourses;course++) {
        let temp = prerequisites
                   .filter(item=> item[1] === course )
                   .map(item=> item[0])
        
        for (let item of temp) {
             inDegrees[item]++
        }
        map.set(course, temp)
    }
  
    pushCoursesToQueue(inDegrees, queue)     
    while(queue.length>0) {
         let course = queue.shift()
         if (map.has(course)) {
              let toTakes = map.get(course)
              for(let i of toTakes) {
                   inDegrees[i]--
                   if (inDegrees[i] === 0) {
                       queue.push(i)
                   }
              }
         }
    }      
        
  
    let filtered = inDegrees.filter(item=> item>0)
    
    return filtered.length === 0 
  
}

function  pushCoursesToQueue(inDegrees, queue) {
    for(let course= 0; course< inDegrees.length; course++) {
        if (inDegrees[course] === 0) {
             queue.push(course)
        }
    }
}
