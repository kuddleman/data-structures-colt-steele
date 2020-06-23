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

  pop() {
    //if there are no nodes, return null
    if ( !this.head ) return undefined
    let current = this.head
    let newTail = current
    while( current.next ) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    //sever connect with the former last item of the list:
    this.tail.next = null
    this.length--
    if ( this.length === 0 ) {
      this.head = null
      this.tail = null
    }
    return current
  }

}


const list = new SinglyLinkedList()
list.push('hi')
list.push('you')
list.push('there')
console.log(list)

//list.traverse()

list.pop()
console.log(list)