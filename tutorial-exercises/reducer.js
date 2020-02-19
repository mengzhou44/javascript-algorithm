// let array= [1,2,3,4,5]
// let reducer = (sum, current) => {
//  return sum+current
// }

// let result = array.reduce(reducer,5)
// console.log(result)

let words =
    'Did that little red hen just run over that larger, redder black hen over there?'

let result = words
    .split(' ')
    .map(word => {
        word = word.toLowerCase().replace(',', '')
        word = word.replace('?', '')
        return word
    })
    .reduce((intermediate, current) => {
        if (intermediate[current]) {
            intermediate[current] = intermediate[current] + 1
        } else {
            intermediate[current] = 1
        }
        return intermediate
    }, {})

console.log(result)

// var mapper = function (item){return item.toLowerCase()};
// var reducer = function (intermediate, current) { if (current) intermediate[current] = (intermediate[current] || 0) + 1; return intermediate;};
// var initial = {};
// var data = "Did that little red hen just run over that larger, redder black hen over there?".split(" ");
// console.log(data.map(mapper).reduce(reducer,initial));
