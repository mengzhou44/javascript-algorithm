// class Stack {
//   constructor() {
//     this.data = [];
//   }
//   push(value) {
//     this.data.push(value);
//   }
//   pop() {
//     if (this.data === []) return null;
//     return  this.data.pop()
//   }

//   isEmpty() {
//     return this.data.length === 0 ;
//   }
// }

// var reverseList = function(head) {
//      if (head === null) {
//           return null;
//      }
//       let stack = new Stack()
//       let node = head;
//       while(node) {
//           stack.push(node);
//           node = node.next
//       }

//      head = stack.pop()
//      let current=head

//      while(stack.isEmpty()=== false) {
//          let  temp = stack.pop();
//           temp.next= null;
//           current.next = temp
//           current=current.next;
//      }
//      return  head;
// };


function reverseList(head) {
 
  let prev = null;
  let curr = head;
  let next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return  prev
}
