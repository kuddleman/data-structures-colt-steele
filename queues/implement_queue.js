// implement a queue from a linked list

class QueueNode {
  constructor( data, next ) {
    this.data = data
    this.next = next
  }
}

class Queue {
  constructor() {
    this.front = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.front === null
  }

  enqueue( value ) {
    this.size ++
    let node = new QueueNode( value )
    if ( this.front === null ) {
       this.front = node
       this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    
  }

  dequeue() {
    if ( this.front === null ) {
      return null
    }

    this.size --

    // we will return the piece of data on the node, not the node itself
    let result = this.front.data
    if ( this.front === this.tail ) {
      // if there was just one node left, then there is no more front or tail
      this.front === null
      this.tail ===  null
    } else {
      // otherwise, make the front equal to the secon thing in the list
      this.front = this.front.next
    }
    
    return result
  }


}

