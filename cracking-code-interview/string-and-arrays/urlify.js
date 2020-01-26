function urlify(str) {
     let words =  str.split(" ");
     return words.join("%20")
}

console.log(urlify("Mr Johon Smith"))