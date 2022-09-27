 /**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  let result = []
  people = people.sort((a,b) => b[0]-a[0] || a[1]-b[1])

  for(let person of people) {
       if (result.length === 0) {
            result[person[1]]= person
       }else {
           result= [...result.slice(0, person[1]),
                  person,
                ...result.slice(person[1])]
      
       }
       
  }

  return result;

};
