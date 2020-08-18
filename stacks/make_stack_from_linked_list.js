// Linked list stack

class StackNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedStack {
  constructor(){
    this.top = null
    this.size = 0
  }

  isEmpty() {
    return this.top === null
  }

  length(){
    return this.size
  }
 
  push(value) {
    let node = new StackNode(value)
    node.next = this.top
    this.top = node

    this.size++
  }

  pop() {
    let result = this.top
    this.top = this.top.next
    this.size--
    return result.data
  }
  
  peek() {
    return this.top.data
  }

}

let myStack = new LinkedStack()

myStack.push(55)
myStack.push(44)
myStack.push(33)
myStack.push(22)
myStack.push(11)

// how to interact with a stack

while ( !myStack.isEmpty()) {
  let value = myStack.pop()
  console.log( value )
}