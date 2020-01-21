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
    if (head === null) return false;
    if (head.next === null) return false;
    let slowP = head;
    let fastP = head;
    while (fastP && fastP.next) {
        fastP = fastP.next.next;
        if (fastP === slowP) {
            return true;
        }
        slowP = slowP.next;
    }

    return false;
};
