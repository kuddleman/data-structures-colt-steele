/*
this class represents each single Node
this class is extremely simnple and just models the Node
this class DOES NOT have methods in it
*/

class ListNode {
  constructor( data, next = null ) {
    this.data = data
    this.next = next
  }
}



/*
this class represents an entire list of nodes
this class has a property "root" that represents
  only the first node in the list
this class has methods that operate over the entire list from 
  just the root
*/

class LinkedList {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return ( this.root === null )
  }

  // add a value to the front of the list
  // the list will either be EMPTY or already have nodes before we prepend
  prepend( data ) {
    if ( this.root === null ) {
      this.root = new ListNode( data )
    } else {
      let node = new ListNode( data )
      node.next = this.root
      this.root = node
    }
  }

  // returns a string representing the list
  toString() {
    let result = 'root ->'
    let current = this.root
    while ( current !== null ) {
      result += ` ${ current.data } ->`
      current = current.next
    }
    return `${result} null`
  }

  // return the size of the list
  length() {
    if ( this.root === null ) {
      return `The length of the list is 0`
    }

    let listLength = 0
    let current = this.root
    while ( current !== null ) {
      listLength++
      current = current.next
    }

    return `The length of this list is: ${ listLength }`
  }

  get( index ) {

    let current = this.root 
    let count = 0
    while ( current === null ) {
      if ( count === index ) {
        return current.data
      }
      count++
      current = current.next
    }
    //bad index?
    return null
  }
  



}

let list = new LinkedList()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)

console.log( list.length() )