function isPrime(num) {
    if (num <=3)  return true 
     let root = Math.ceil(Math.sqrt(num))
     for(let i=2; i<=root; i++) {
         if (num %i === 0)  return false 
     }

     return true 
}

console.log(isPrime(4))
console.log(isPrime(2));

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(9));