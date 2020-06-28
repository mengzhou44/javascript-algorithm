function mergeKLists(lists) {
    let dummy = new ListNode(-1)
    let current = dummy
    lists = lists.filter((item) => item !== null)

    while (lists.length > 0) {
        let min = lists[0].val
        let index = 0
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].val < min) {
                min = lists[i].val
                index = i
            }
        }
        current.next = new ListNode(min)
        current = current.next

        lists[index] = lists[index].next

        lists = lists.filter((item) => item !== null)
    }
    return dummy.next
}
