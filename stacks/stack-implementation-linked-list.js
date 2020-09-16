/*
For stacks, we just want to
1. Establish a new stack
   const stack = new Stack()
2. Then just be able to push and pop
*/

class Node {
  constructor( value ) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    this.size ++
    return size
  }

  pop() {
    if (!this.first) return null
    
    // set temp to this.first so we can return it at the end
    let temp = this.first
    
    // if there is only one item in the list:
    if ( this.first === this.last ) {
      this.last = null
    }
    this.first = this.first.next
    this.size --
    return temp.value
  }
}