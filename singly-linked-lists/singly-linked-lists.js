class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push( val ) {
    //create new node:
    const newNode = new Node( val )
    //if the linked list is empty, set the new value to be the head and the tail:
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      //add the new element to the next element after the current tail
      this.tail.next = newNode
      //update tail:
      this.tail = newNode
    }
    //make the length 1 longer:
    this.length++
    //return the list:
    return this 
  }

  // here's how to traverse a singly linked list:

  traverse() {
    let current = this.head
    while ( current ) {
      console.log( current.val )
      current = current.next
    }
  }
}


const list = new SinglyLinkedList()
list.push('hi')
list.push('you')
list.push('there')
//console.log(list)

list.traverse()