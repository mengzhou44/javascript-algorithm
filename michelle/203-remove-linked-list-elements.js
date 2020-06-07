function removeElements(head, val) {
    let dummy = new ListNode(-1)
    dummy.next = head 
    let current = head
    let previous = dummy
    while(current) {
        if (current.val === val) {
             previous.next =current.next
        } else {
             previous = current
        }
        current = current.next 
    } 
    
    return dummy.next 

}