class ListNode {
    constructor(val, node) {
        this.val = val
        this.next = node
    }
}

function mergeTwoLists(l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }

    let dummy = new ListNode(-1)
    let head = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }

    if (l1 !== null) {
        dummy.next = l1
    }

    if (l2 !== null) {
        dummy.next = l2
    }

    return head.next
}

let a = new ListNode(1, new ListNode(3, new ListNode(5)))
let b = new ListNode(2, new ListNode(4, new ListNode(6)))

console.log(mergeTwoLists(a, b))
