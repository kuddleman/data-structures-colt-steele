class ListNode {
  constructor( data, next=null) {
    this.data = data
    this.next = next
  }

}

/*
We want to make a singly linked list like this:

4 -> 7-> 8-> null
*/



let n1 = new ListNode(4)
let n2 = new ListNode(7)
let n3 = new ListNode(8)

// Now hook the nodes up and have them point to the next one in the list

n1.next = n2
n2.next = n3
// n3.next is set to 'null' by default

//console.log(n1) //ListNode { data: 4, 
              //    next: ListNode { data: 7, next: ListNode { data: 8, next: null } } } 



// here is the for-loop for linked lists
function printList(node) {
  let current = node
  while ( current != null ) {
    console.log( current )
    current = current.next
  }
}

 printList(n1) 

 // here is the general template to do anything with a singly linked list:

 function generalLinked(node) {

  let current = node
  while ( current != null ) {
    current = node.next
  }
 }