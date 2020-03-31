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
