// Hi, here's your problem today. This problem was recently asked by Twitter:

// Given 3 sorted lists, find the intersection of those 3 lists.

// Here's an example and some starter code.

// def intersection(list1, list2, list3):
//   # Fill this in.
  
// print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))
// # [4]


function intersection(list1,list2, list3) {
     let i=0
     let j=0
     let k=0
     let result =[]
     while(i<list1.length && j<= list2.length && k <= list3.length) {
          if (list1[i]<list2[j] || list1[i]<list3[k]) {
            i++
             continue
          }
          if (list2[j]<list1[i] || list2[j]<list3[k]) {
            j++
            continue
          }
          if (list3[k]<list1[i] || list3[k]<list2[j]) {
              k++
            continue
          }
          if (list1[i] === list2[j] && list2[j] === list3[k]) {
            result.push(list1[i])
             i++
             j++
             k++
          }

     }
      return result 
    }


    console.log(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))
