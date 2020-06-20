function findAnagram(s,t) {
    let result =[]
     for(let i=0; i<s.length-t.length+1; i++) {
        console.log(i)
        let temp = s.substring(i,i+t.length)
        if (isAnagram(temp,t)=== true) {
           console.log(i)
           result.push(i)
        }
     } 
     return result 
}


function isAnagram(a,b) {
    if (a.length!== b.length)   return false 
      let temp1= a.split('').sort().join('')
      let temp2 = b.split('').sort().join('')
      if (temp1 === temp2) console.log(a,b)
      return  temp1=== temp2 
     
}

console.log(findAnagram('acdbacdacb', 'abc'))