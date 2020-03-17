function removeElements(head, val) {
    if (head === null) return null

    let cur = head
    let previous = new ListNode(-1)
    previous.next = head

    let dummy = previous

    while (cur) {
        if (cur.val !== val) {
            previous = cur
        } else {
            previous.next = cur.next
        }
        cur = cur.next
    }
    return dummy.next
}
