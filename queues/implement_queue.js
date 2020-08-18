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
  }

  enqueue( value ) {
    let node = new QueueNode( value )
    if ( this.front === null ) {
       this.front = node
    }
    this.tail.next = node
    this.tail = node
  }


}

