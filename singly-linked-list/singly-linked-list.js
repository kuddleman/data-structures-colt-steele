class Node {
  constructor(val) {
    this.val = val
    this.next = next
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  printList() {
    let current = this.head

    while ( current ) {
      console.log(current)
      current = current.next
    }
  }

  push(val) {
    const newNode = new Node(val)
    if ( !this.head ) {
      this.tail = newNode
      this.head = newNode
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  pop() {
     let current = this.head
     let newTail = current

     if ( !this.head ) {
       return undefined
     }

     while( current.next) {
        newTail = current
        current = current.next
        
     }
     this.tail = newTail
     newTail.next = null
     
     
     this.length --

     if ( this.length === 0 ) {
       this.head = null
       this.tail = null
     }
    
     return current
  }

  findMinElement() {
    if (!this.head) {
      return undefined
    }

    let min = Infinity
    let current = this.head

    while ( current ) {
      if ( current.val < min ) {
        min = current.val
      }
      current = current.next
    }
    return min
  }

  findMaxElem() {
    if (!this.head) {
      return undefined
    }

    let max = -Infinity
    let current = this.head
    while (current) {
      if ( current.val > max ) {
        max = current.val
      }
      current = current.next
    }

    return max
  }

  findMiddleElement() {
    let slowPointer = this.head
    let fastPointer = this.head

    if (!this.head) {
      return undefined
    }

    while (fastPointer !== null && fastPointer.next !== null) {
       fastPointer = fastPointer.next.next 
       slowPointer = slowPointer.next
    }

    return slowPointer.val
  }

  // there is an iterative and a recursive solution
  // here is the iterative solution:
  reverseList() {
    if (!this.head) {
      return undefined
    }
    let current = this.head
    let previous = this.head
    let temp = this.head
    
    while( current ) {
      temp = current.next
      current.next = previous
      previous = current
      current = temp
    }
    return previous
  }

  doesLoopExist() {
    if (!this.head) {
      return undefined
    }
    let slowPointer = this.head
    let fastPointer = this.head

    while( slowPointer && fastPointer && fastPointer.next ) {
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next 
      if ( slowPointer === fastPointer ) {
        return true
      }
    }
    return false
  }

}