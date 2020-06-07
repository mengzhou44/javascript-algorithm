class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
function partition(head, x) {
    if (head === null || head.next === null) return head

    let smallList = new ListNode(-1)
    let largeList = new ListNode(-1)

    let p1 = smallList
    let p2 = largeList
    let current = head

    while (current) {
        let next = current.next
        if (current.val < x) {
            p1 = addToLinkedList(p1, current)
        } else {
            p2 = addToLinkedList(p2, current)
        }
        current = next
    }
    p1.next = largeList.next

    return smallList.next
}
