class ListNode {
    constrcutor(val) {
        this.val = val
        this.next = null
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(-1)
    let current = dummy
    let p1 = l1
    let p2 = l2
    let carry = 0
    while (p1 || p2) {
        let sum = carry
        if (p1) {
            sum += p1.val
            p1 = p1.next
        }
        if (p2) {
            sum += p2.val
            p2 = p2.next
        }

        current.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)
        current = current.next
    }

    if (carry === 1) {
        current.next = new ListNode(1)
    }

    return dummy.next
}
