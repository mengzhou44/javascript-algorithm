function mergeKLists(lists) {
    let dummy = new ListNode(-1)
    let cur = dummy
    while (!isEmpty(lists)) {
        let smallest = removeSmallest(lists)

        cur.next = smallest
        cur = cur.next
    }
    return dummy.next
}

function isEmpty(lists) {
    for (let list of lists) {
        if (list !== null) {
            return false
        }
    }
    return true
}

function removeSmallest(lists) {
    let index
    for (let i = 0; i < lists.length; i++) {

        if (lists[i] === null) continue
        if (index === undefined) {
            index = i
        } else {
            if (lists[index].val > lists[i].val) {
                index = i
            }
        }
        
    }

    let result = new ListNode(lists[index].val)
    lists[index] = lists[index].next

    return result
}


***********
function mergeKLists(lists) {
   
    let dummy =  new ListNode(-1)
    let cur = dummy
    
    while(true) {
        let  smallest = movePointerToTheSmallest(lists)
        
        if (smallest ===null ) break 
        
        cur.next= new ListNode(smallest)
        cur = cur.next
    }
    
    return dummy.next
}

function movePointerToTheSmallest(pointers) {
 
     let index
     for(let i=0; i<pointers.length; i++) {
         if (pointers[i] === null) continue
         
         if (index=== undefined) {
             index= i
         }else {
             if (pointers[index].val >pointers[i].val) {
                 index= i
             }
         }
     }
    
    if (index!== undefined) {
         let val = pointers[index].val 
    
         pointers[index] = pointers[index].next
    
         return val
    }
    
    return null
}

 
 