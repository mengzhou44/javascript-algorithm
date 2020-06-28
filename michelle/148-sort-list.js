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
function sortList(head) {
    if (head === null || head.next === null) return head

    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let l2 = slow.next
    slow.next = null

    let temp1 = sortList(head)
    let temp2 = sortList(l2)

    return merge(temp1, temp2)
}

function merge(head1, head2) {
    let dummy = new ListNode(-1)
    let cur = dummy
    while (head1 && head2) {
        if (head1.val < head2.val) {
            cur.next = head1
            head1 = head1.next
        } else {
            cur.next = head2
            head2 = head2.next
        }
        cur = cur.next
    }

    if (head1 !== null) {
        cur.next = head1
    }

    if (head2 !== null) {
        cur.next = head2
    }

    return dummy.next
}


***********
 
// bottom up 
function sortList(head) {
   
    if (head === null || head.next === null) return head
   
    let len = 0 
    let cur = head 
    while(cur) {
        cur = cur.next
        len = len+1
    }
    
    let l, r, tail
    let dummy = new ListNode(-1)
    dummy.next = head
    for(n=1; n<len; n= n*2){
        let cur = dummy.next
        tail = dummy
        while(cur) {
            l = cur 
            r = split(l, n)
            cur = split(r,n)
            let merged = merge(l, r)
            tail.next = merged[0]
            tail = merged[1]
        }
    }
    return dummy.next
}


function split(head, n) {
     while(--n && head) {
          head = head.next
     }
     if (head === null)  return null 
     let rest = head.next
     head.next = null 
     return rest
}


function merge(head1, head2) {
    let dummy = new ListNode(-1)
    let cur = dummy
    while(head1 && head2) {
        if (head1.val<head2.val) {
             cur.next = head1
             head1= head1.next
        } else {
               cur.next = head2
               head2 =  head2.next
        }
        cur = cur.next
    }
    
    if (head1!== null) {
        cur.next= head1
    }
    
    if (head2!== null) {
        cur.next= head2
    }
    
    let head = dummy.next
    let tail = dummy.next
    while(tail.next) {
        tail = tail.next
    }
    return [head, tail]
}





