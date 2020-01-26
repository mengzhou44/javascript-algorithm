/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null ) return false 
   
    let slowP= head; 
    let fastP= head; 
    while(fastP.next!== null && fastP.next.next!== null ) {
        fastP= fastP.next.next;
        if (fastP ===slowP) {
          return true
        }
        slowP= slowP.next 
    }
    
    return false 
};