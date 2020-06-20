function swapBits(num) {

   let evenBits = num & 0xAAAAAAAA
   let oddBits = num &  0x55555555
   evenBits = evenBits>>1
   oddBits = oddBits<<1
   return (evenBits | oddBits)
}

          
console.log(swapBits(23).toString(2))