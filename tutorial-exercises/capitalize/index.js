// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



function capitalize(str) {
    let result = [str[0].toUpperCase()];
    for(let i=1; i< str.length; i++) {
       if (str[i-1]===' ') {
          result.push(str[i].toUpperCase())
       }else {
        result.push(str[i])
       }
    }

    return result.join("")

}

// function capitalize(str) {
//     let temp = [];
    
//     for (let letter of str.split(" ")) {
//         const capilalized = letter.charAt(0).toUpperCase() + letter.slice(1)
//         temp.push(capilalized)
//     }
    
//     return temp.join(" ")

// }

module.exports = capitalize;
