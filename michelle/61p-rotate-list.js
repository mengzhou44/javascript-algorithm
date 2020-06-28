function rotateRight(head, k) {
    if (head === null) return head

    let size = getSize(head)
    k = k % size

    let p1 = head
    let p2 = head
    let count = 0
    while (count < k) {
        count++
        p1 = p1.next
    }
    console.log('p1', p1)

    while (p1.next !== null) {
        p1 = p1.next
        p2 = p2.next
    }

    p1.next = head
    let newHead = p2.next
    p2.next = null

    return newHead
}

function getSize(head) {
    let current = head
    let size = 0
    while (current !== null) {
        size++
        current = current.next
    }
    return size
}
