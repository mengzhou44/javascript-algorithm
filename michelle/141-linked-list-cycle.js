function hasCycle(head) {
    if (head === null) return false

    if (head.next === null) return false
    if (head.next.next === null) return false

    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (fast === slow) {
            return true
        }
    }

    return false
}
