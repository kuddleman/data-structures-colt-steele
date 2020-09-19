// data MUST BE sorted for binary search to work

// DIVIDE AND CONQUER

// This function accepts a sorted array and a value (only numbers)

//BIG O.   Worst case: O(log n)
//           Best case: O(n)

// Create a left pointer at the start of the array
// Create a right pointer at the end of the array

const binarySearch = ( arr, elem ) => {
  let start = 0
  let end = arr.length - 1
  let middle =  Math.floor((start + end) / 2)

  while( arr[middle] !== elem && start <= end) {
    if ( elem < arr[middle] ) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if ( arr[middle] = elem ) {
    return middle  //this is the index of the elem we were searching for
  }
  return -1  
}

binarySearch([2,5,6,9,13,15,28,30], 15)
