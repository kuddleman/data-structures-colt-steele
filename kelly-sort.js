// THIS IS   SELECTION SORT

// bubble, selection, insertion  are the no-good sorts, but good to know.

// good for real use are  **quick sort and merge sort***


// breadth and depth search are important to know

// binary search on a tree



//  this is basis for Heap sort

// good for interviews, but not in practical use

//

// loop through the array

// have min index   ,  min = 0 index

// search for min element in the array.   

// once we find it , we'll swap the min with whatever is in the min index..   


// increment min index

// repeat from line 9.   


const unsorted = [ 5, 3, 1, 4, 8 ]

[ 1, 3, 4, 5, 8 ]

const sortArray = arr => {

  for ( let i = 0; i < arr.length; i++ ) {
    let minIndex = i
    for ( let j = i + 1; j < arr.length; j++ ) {
       if ( arr[minIndex] > arr[j] ) {
         minIndex = j  
       } 
    }
    if ( !(i == minIndex) ) {
    swap( arr[i], arr[minIndex] )
    }
  }
  return arr
}