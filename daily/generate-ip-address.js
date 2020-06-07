function generateIPAddress(s){
 
    let lastIP = removeLastLetter(s)
    let result =[] 

    generateIPAddressHelper(lastIP, s)

    function  generateIPAddressHelper(lastIP, remainning,  addresses=[]) {
       if (remaining.length === 0)  {
          result.push(address.join(''))
          address=[]
          return 
       }
       if (!isValidIP(lastIP)) return 

        addresses.unshift(lastIP)
        let lastIP = removeLastLetter(remainning)
        generateIPAddressHelper(lastIP, remainning,  addresses)
     
       if (lastIP.length === 3)  {
          lastIP = removeLastLetter(rmainning)
       }  else {
          lastIP += removeLastLetter(rmainning)
       }

       generateIPAddressHelper(lastIP, remainning,  addresses)
       
    }

    return result 


}

function removeLastLetter(str) {
   let temp = str.split('')
   let result = temp.pop()
   str=temp.join('')
   return result 
}


function isValidIP(str) {
   if (str.length>1 && s.startsWith("0")) return false
   let temp = parseInt(str)
   if (temp>=0 && temp<=255)  return true 

   return false 
}

