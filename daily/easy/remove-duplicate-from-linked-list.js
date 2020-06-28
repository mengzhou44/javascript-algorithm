class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function removeDuplicateFromLinkedList(head) {
    if (head === null || head.next === null) return head
    let set = new Set()
    let dummy = new ListNode(-1)
    let node = dummy
    let current = head
    while (current !== null) {
        if (!set.has(current.val)) {
            node.next = current
            node = node.next
            set.add(current.val)
        }
        current = current.next
    }
    return dummy.next
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)

console.log(removeDuplicateFromLinkedList(head))
