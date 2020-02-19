// function getPermutations(str) {
//     if (str.length === 1) {
//         return [str];
//     }
//     let last = str[str.length - 1];
//     let previous = getPermutations(str.substring(0, str.length - 1));
//     let result = [];
//     for (let temp of previous) {
//         createCombined(temp, last).map(item => {
//             if (!result.includes(item)) {
//                 result.push(item);
//             }
//         });
//     }
//     return result;
// }

// function createCombined(temp, letter) {
//     let arr = [];
//     for (let i = 0; i <= temp.length; i++) {
//         let s = temp.slice(0, i) + letter + temp.slice(i);
//         arr.push(s);
//     }
//     return arr;
// }

function getPermutations(str) {
    let result = []
    let map = createFreqTable(str)
    helper(map, '', str.length, result)
    return result
}

function createFreqTable(str) {
    let map = {}
    for (let letter of str) {
        if (map[letter] === undefined) {
            map[letter] = 1
        } else {
            map[letter] = map[letter] + 1
        }
    }
    return map
}

function helper(map, prefix, remaining, result) {
     if (remaining === 0) {
          result.push(prefix)
          return result
     }
      for (let key of Object.keys(map)) {
           let count = map[key]
           if (count>0) {
               map[key]= count -1
               helper(map, prefix+key, remaining-1, result)
               map[key]=count
           }
      }

}

console.log(getPermutations('abbd'))
