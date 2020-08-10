class ListNode {

  constructor( data, next=null ) {
    this.data = data
    this.next = next
  }
}


// start: null
// end: 1 ->2 ->3

const problem1 = () => {
  // remember: there is always a root

  // first establish the nodes
  let root = null
  let n1 = new ListNode(1)
  let n2 = new ListNode(2)
  let n3 = new ListNode(3)

  //now hook them up:

  root = n1
  n1.next = n2
  n2.next = n3
}

// establish a linked link without so many variables
function problem1A() {
  let root = null
  root = new ListNode(3)

  let node = new ListNode(2)
  node.next = root
  root = node

  node = new ListNode(1)
  node.next = root
  root = node
  printList(root)
}



const printList = node => {

  let current = node
  while( current != null ) {
    console.log( current )
    current = current.next
  }
}


// start: 1 -> 2 -> 3
// end 0->1 -> 2 -> 3
const problem2 = () => {
  console.log("Problem #2")

  let root = new ListNode(1, new ListNode(2,new ListNode(3)))

  let zero = new ListNode(0)
  zero.next = root
  root = zero

  printList(root)
}

console.log(problem2())

//start: 1->2->3
//end: 1->2->3->4
const problem4 = () => {

  let root = new ListNode( 1,new ListNode(2, new ListNode(3)))
  let four = new ListNode(4)
  root.next.next.next = four

}