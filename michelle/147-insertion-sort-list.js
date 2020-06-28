function insertionSortList(head) {
    if (head === null) return head
    let dummy = new ListNode(-1)
    let cur = head
    while (cur) {
        insertTo(dummy, cur.val)
        cur = cur.next
    }
    return dummy.next
}

function insertTo(dummy, val) {
    let cur = dummy.next
    let previous = dummy
    while (cur) {
        if (cur.val > val) {
            let nodeInserted = new ListNode(val)
            previous.next = nodeInserted
            nodeInserted.next = cur
            previous = nodeInserted
            return
        } else {
            previous = cur
            cur = cur.next
        }
    }
    previous.next = new ListNode(val)
}
****************

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {
    if (head === null)  return head 

    let newList =null
    let cur =head
    while(cur!== null) {
        newList = insertTo(newList,cur)
        cur = cur.next 
    }
     
    return  newList
}

function insertTo(head,  node) {

 if (head === null) {
     return new ListNode(node.val)
 } else {
     let cur = head
     let prev =null
     while(cur!==null) {
         if (cur.val>node.val) {
            
             if (prev === null) {
                 prev= new ListNode(node.val)
                 prev.next = cur
              
                 return  prev 
             } else {
                 let temp =new ListNode(node.val)
                 temp.next = cur
                 prev.next = temp
                 return head
             }
         }else {
             prev= cur
             cur = cur.next
         }
     }
     
     prev.next = new ListNode(node.val)
     return head 
 }

}
