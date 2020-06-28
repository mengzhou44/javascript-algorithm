function swapPairs(head) {
    if (head === null || head.next === null) return head

    let pointer1 = head
    let pointer2 = head.next
    let temp = pointer2.next
    let dummy = new ListNode(-1)

    dummy.next = pointer2
    pointer2.next = pointer1

    pointer1.next = swapPairs(temp)

    return dummy.next
}

function swapPairs(head) {
    if (head === null || head.next === null) return head

    let dummy = new ListNode(-1)
    let current = dummy

    let node1 = head
    let node2 = head.next

    while (true) {
        let temp = node2.next
        node2.next = node1
        node1.next = temp
        current.next = node2
        current = node1
        if (temp === null || temp.next === null) break
        node1 = temp
        node2 = temp.next
    }
    return dummy.next
}
