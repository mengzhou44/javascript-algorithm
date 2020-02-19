// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  if (list.head === null || list.head.next === null) {
    return list.head;
  }
  let slow = list.head;
  let fast = list.head;
  while (true) {
    fast = fast.next.next;
    if (fast !== null && fast.next !== null) {
      slow = slow.next
    } else if (fast === null) {
      return slow
    } else if (fast.next === null) {
      return slow.next;
    }
  }
}

module.exports = midpoint;
