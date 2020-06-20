class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1)
    let p1 = l1
    let p2 = l2
    let current = dummy
    while (p1 && p2) {
        if (p1.val < p2.val) {
            current.next = p1
            p1 = p1.next
        } else {
            current.next = p2
            p2 = p2.next
        }
        current = current.next
    }

    if (p1) {
        current.next = p1
    } else {
        current.next = p2
    }

    return dummy.next
}
