var swapPairs = function (head) {
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
