// function shortestToChar(S, C) {
//     let result = []
//     for (let i = 0; i < S.length; i++) {
//         result.push(findShortestDistance(i, S, C))
//     }
//     return result
// }

// function findShortestDistance(index, S, C) {
//     if (S[index] === C) return 0
//     let left = index
//     let right = index

//     while (true) {
//         left--
//         if (left >= 0 && S[left] === C) {
//             return index - left
//         }
//         right++
//         if (right < S.length && S[right] === C) {
//             return right - index
//         }
//     }
// }

// **************

// function shortestToChar(S, C) {
//   let  positions =[]
//   for(let  i=0; i<S.length; i++) {
//      if (S[i] === C) {
//          positions.push(i)
//      }
//   }
//   let result = []
//   for(let  i=0; i<S.length; i++) {
//        if (S[i] === C) {
//            result.push(0)
//        }
//       else {
//           result.push(getShortestDistance(i,positions))
//       }
//   }
//   return result
// }

// function getShortestDistance(i, positions) {
//   let index = 0
//   while(index<positions.length) {
//        if (positions[index]>i) {
//            if (index === 0){
//                return positions[index] -i
//            }

//            return Math.min(positions[index] - i, i-positions[index-1])
//        }
//       index++
//   }

//   return i -positions[positions.length-1]

// }

function shortestToChar(S, C) {
    let leftCIndex = -1
    let rightCIndex = -1
    let group = []
    let result = []
    for (let i = 0; i < S.length; i++) {
        group.push(i)
        if (S[i] === C) {
            leftCIndex = rightCIndex
            rightCIndex = i
            for (let item of group) {
                if (leftCIndex === -1) {
                    result.push(rightCIndex - item)
                } else {
                    let val = Math.min(item - leftCIndex, rightCIndex - item)
                    result.push(val)
                }
            }
            group = []
        }
    }

    for (let item of group) {
        result.push(item - rightCIndex)
    }

    return result
}
