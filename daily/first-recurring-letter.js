function firstRecurringLeter(word) {
    let temp = [] 
    for( let c of word) {
       if (temp.includes(c)) {
          return c 
       } else {
          temp.push(c)
       }
    }

    return 'None'
}


console.log(firstRecurringLeter('qwertty'))

console.log(firstRecurringLeter('qwerty'))