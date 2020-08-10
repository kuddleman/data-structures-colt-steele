//compare each item from listA to list B

//  When one list hits null first:

  // Compare the next item to the head of the same list

  const findIntersection = ( headA, headB ) => {
    // two pointers pointing at head nodes
    let a = headA

    let b = headB

    while (a !== b ) {
      if ( a === b ) {
        return a
    }
    if ( a.next === null ) {
      a.next = headB
    }
    if ( b.next === null ) {
      b.next = headA
    }
    a = a.next 
    b = b.next
  }

  return null
}