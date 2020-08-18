//post fix evaluation

// [5, 3, + ]  => 8
// 

// [5, 3, +, 2, *]  =>16


// given an array



// interate through the array and put each number 
// into a stack.  

// But once we get to an operator, we have to get the numbers
// we already put into the stack and perform that operation on
// those numbers.  

// Keep iterating and when I get to another operator, I do the same:
//  perform the operation on the number already in the stack.    

// at the end of the iteration, I should have one number remaining in the
// stack.  I return that number as an answer by popping it off.   

compute = ( int, string, int ) => {

  return //float
}

//compute ( 5, '+', 3 ) => 8

const postFixEval = array => {

  const myStack = []

  for ( let i = 0; i < array.length; i++ ) {
    let elem = array[i]
    if ( typeof(elem) === 'number'){
      myStack.push( elem )
    } else {
       let result = compute( myStack.pop(), elem , myStack.pop() )
       //empty myStack
       
       //push in result
       myStack.push( result )
    }
  }

  return myStack.pop()

}