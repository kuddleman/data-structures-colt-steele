// a linked list is a collection of classes..so first make a node:

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

  // Popping Pseudocode:

  // If there are no nodes in the list, return undefined
  // Loop through the list until you reach the tail
  // Set the next property of the 2nd to last node to be null
  // Set the tail to be the 2nd to last node
  // Decrement the length of the list by 1
  // Return the value of the node removed

  pop() {
    //if there are no nodes, return null.  We can do this by checking if there is a head
    if ( !this.head ) return undefined


    //we set two variable: current which will be the head
    // new tail is the same at the beginning of the loop
    let current = this.head
    let newTail = current
    while( current.next ) {   //while current still has a 'next'
      newTail = current    //set newTail to be the same as current
      current = current.next //then move current forward one node
    }
    this.tail = newTail
    //sever connection with the former last item of the list:
    this.tail.next = null
    this.length--
    
    // this is the special case if there is one item left:
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