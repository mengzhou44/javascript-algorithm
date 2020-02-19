// function getSubSets(arr) {
//     if (arr.length === 0) {
//         return [];
//     }

//     if (arr.length === 1) {
//         return arr[0];
//     }
//     let item = arr.pop();
//     let previousSubsets = getSubSets(arr);
//     let result = [];
    
//     result.push(...previousSubsets);
//     result.push(item);

//     for (let subset of previousSubsets) {
//         let temp = [...subset,item]
//         result.push([...temp]);
//     }
//     return result;
// }


function getSubSets(arr) {
  let result =[]

  let max = 1 << arr.length
  for(let i=0; i<max; i++) {
     let subset = createSubSet(i,arr)
      result.push(subset)
  }
  return result
}

function createSubSet(x, arr) {
    let subset =[]
    let index =0
    for(let k=x;k>0; k= k>>1 ){
        if ((k &1) ===1) {
           subset.push(arr[index])
        }
        index++
    }
    return subset
}


let result = getSubSets(['a', 'b', 'c', 'd']);

console.log(result);
