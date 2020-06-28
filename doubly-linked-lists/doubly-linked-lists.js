class Node {
  constructor( val ) {
    this.val = val
    this.next = null
    this.prev = null       
  }
  
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
   
  // Pseudo code to implement push
  //create a new node with the value passed in.
  // check if list is empty. If so, then set the head and the tail
     // to be the newly created node.
  //if not, set the next property on the tail to be that node
    // Set the previous property on the newly created node to be the tail  
  // Set the tail to be the newly created node
  // Increment the length
  //Return the Doubly Linked List     
  
  push() {

  }
}