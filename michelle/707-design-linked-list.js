class ListNode {
     constructor(val) {
        this.val = val 
        this.next = null 
     }
}

class MyLinkedList{
  constructor() {
      this.head = null 
  }

  addAtHead(val) {
     if (this.head === null) {
         this.head = new ListNode(val)
     } else {
         let temp = this.head 
         this.head = new ListNode(val)
         this.head.next = temp
     }
  }

  addAtTail(val) {
      if (this.head === null) {
          this.head = new ListNode(val)
      } else {
          let cur = this.head
          while(cur.next) {
             cur = cur.next
          }
          cur.next = new ListNode(val)
      }

  }
  
  get(index) {
      let count =0 
      let cur = this.head
      while(count<index && cur.next) {
         cur = cur.next
         count++
      }
       if (cur === null) {
          return -1 
       }
       return cur.val
  }

  addAtIndex(index, val) {
      let count =0 
      let cur = this.head
      while(count<index && cur.next) {
        cur = cur.next
        count++
      }
 
      if (count < index && cur) {
         cur.next = new ListNode(val)
      }
      else if (count === index && cur) {
           cur.val = val
           cur.next = 
      } 

  }

  deleteAtIndex(index) {
      let count = 0
      let cur = this.head
      let prev
      while(count<index && cur.next) {
          count++ 
          prev= cur
          cur = cur.next
      }

      if (count === index){
          prev.next = cur.next
      }
  }

}

  
let linkedList = new MyLinkedList()
linkedList.addAtHead(1);
linkedList.addAtTail(3);
 

linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3

 console.log(linkedList)
// linkedList.get(1);            // returns 2

// console.log(linkedList)

// linkedList.deleteAtIndex(1);  // now the linked list is 1->3

// console.log(linkedList)
// linkedList.get(1);   

// console.log(linkedList)