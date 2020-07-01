//using arrays

//use brute force

// given an array of integers plus a target number.
//integers may NOT all be unique
// assume each array has only ONE pair to add up to the value.
// Can not use the same number twice

//return indicies of numbers where the numbers ad up to the target

// assume valid array whose length is at least 2

 const inputArr = [ 2, 7, 7, 5, 1 ]
 
 //target 9

// return  0, 1


const findIndicies = ( arr, target ) => {
   
  const answerArr = []

  for ( let i = 0; i < arr.length; i++ ) {
     
     for ( let j = i + 1; j < arr.length; j++ ) {
      if ( arr[i] + arr[j]  === target) {
        answerArr.push(i)
        answerArr.push(j)
        
        return answerArr
      }
     }
  }
} 

console.log( findIndicies( inputArr, 9 ) )


/// Look up time complexity.  How much space does an algo need
// with respect with it's starting space.

// stacks