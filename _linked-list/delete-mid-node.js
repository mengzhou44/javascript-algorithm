const {LinkedList} = require("./_linked-list")

function deleteMidNode(l) {
    let fastP= l.head;
    let slowP= l.head;
    let previous= null
     
    while(fastP.next && fastP.next.next) {
        previous = slowP
        slowP= slowP.next
        fastP= fastP.next.next
    }
 
    previous.next = slowP.next
    return l

}

let l = new LinkedList([1, 2, 4, 3, 6]);

let result = deleteMidNode(l) 

result.print()