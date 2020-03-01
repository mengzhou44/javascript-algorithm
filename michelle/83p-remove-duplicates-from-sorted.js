class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function deleteDuplicates(head) {
    if (head === null || head.next === null) return head

    let prev = head
    let cur = head.next
    while (cur) {
        if (prev.val !== cur.val) {
            prev.next = cur
            prev = cur
        }
        cur = cur.next
    }
    prev.next = null

    return head
}
