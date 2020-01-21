 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let  arr=[]
  let nodeA = headA
  let nodeB= headB
  while(nodeA) {
      arr.push(nodeA)
      nodeA= nodeA.next;
  }
 
  while(nodeB) {
      if (arr.includes(nodeB)) {
          return nodeB
      } 
      nodeB= nodeB.next
  } 
 return  undefined
 
};