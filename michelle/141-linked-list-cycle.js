var hasCycle = function(head) {
    if (head === null) return false

    if (head.next === null) return false

    let fastP = head
    let slowP = head
    while (fastP && fastP.next ) {
        fastP = fastP.next.next
        slowP = slowP.next
        if (fastP === slowP) {
            return true
        }
    }

    return false
}
