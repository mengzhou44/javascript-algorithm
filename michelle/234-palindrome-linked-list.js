function isPalindrome(head) {
    if (head === null || head.next === null) return true

    let slowP = head
    let fastP = head

    while (fastP && fastP.next) {
        slowP = slowP.next
        fastP = fastP.next.next
    }

    let tail = slowP

    if (fastP) {
        slowP = slowP.next
    }

    let temp = reverse(head, tail)

    while (temp) {
        if (temp.val !== slowP.val) return false
        temp = temp.next
        slowP = slowP.next
    }
    return true
}

function reverse(head, p) {
    let current = head
    let prev = null
    while (current !== p) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}
