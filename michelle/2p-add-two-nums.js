class ListNode {
    constrcutor(val) {
        this.val = val
        this.next = null
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy
    let carry = 0
    while (l1 || l2) {
        let sum = carry
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }
        dummy.next = new ListNode(sum % 10)
        dummy = dummy.next

        carry = Math.floor(sum / 10)
    }
    if (carry > 0) {
        dummy.next = new ListNode(carry)
    }
    return head.next
}
