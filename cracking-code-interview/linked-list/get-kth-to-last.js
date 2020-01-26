const {LinkedList} = require("./_linked-list")

function getElementFromLast(l,k){

  
    let fastP= l.head;
    let slowP= l.head;
     
    for(let count=0; count<k; count++) {
        if (fastP === null) {
          return null 
        }
        fastP= fastP.next
    }
 
    while(fastP!=null) {
       slowP = slowP.next
       fastP = fastP.next
    }

    return slowP

}

let l = new LinkedList([1, 2, 3, 6, 6,4, 3, 5, 1]);

let node  =getElementFromLast(l, 2) 
console.log(node)