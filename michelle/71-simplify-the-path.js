function simplifyPath(path) {
    let temp = path.split('/')
    
    temp = temp.filter(temp=>temp!=='.' && temp!=='')
   
    let  stack =[]
     for(let item of temp) {    
         if (item === '..' && stack.length>0) {
             stack.pop()
         } else if (item!== '..') {
             stack.push(item)
         }
     }
     return "/" +stack.join("/") 
}

 

