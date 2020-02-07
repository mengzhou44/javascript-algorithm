// function containsPythagoreanTriplets(array){
//     if (array.length <3) return false
//     array = array.map(item=> item *item)

//     for(i=0; i< array.length-1; i++ ) {
//          for (j=i; j<array.length; j++) {
//              if (array.includes(array[i] +array[j])) {
//                 return true
//              }
//          }
//     }
//     return false
// }

function findPythagoreanTriplets(array) {
    let cache= {}

    for (let i = 0; i < array.length - 1; i++) {
        for (j = i; j < array.length; j++) {
            const key = [i, j].sort().join(',')
             if (cache[key]=== undefined) {
                cache[key]= array[i] *array[i] + array[j] *array[j]
             }
             const found = array.find(item=> item *item === cache[key])
             if (found !== undefined) {
                  return [array[i], array[j], found]
             }
        }
    }

    return []
}

// function findPythagoreanTriplets(array) {
//     const temp = [...array].sort((a, b) => a - b)
//     let cache = {}
//     return helper(temp, cache).map(index => array[index])
// }

// function helper(array, cache) {
//     if (array.length < 3) {
//         return []
//     }
//     let last = array.pop()
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             let key = [i, j].sort((a, b) => a - b).join(',')
//             if (cache[key] === undefined) {
//                 cache[key] = array[i] * array[i] + array[j] * array[j]
//             }
//             if (cache[key] === last * last) {
//                 return [i, j, array.length]
//             }
//         }
//     }
//     return helper(array, cache)
// }

let result = findPythagoreanTriplets([3, 5, 12, 5, 13])

console.log(result)
