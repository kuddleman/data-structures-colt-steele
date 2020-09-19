// not all that efficient
// not commonly used

// const swap ( arr, idx1, idx2 ) {
//   [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]
// }

const bubbleSort = ( arr ) => {

  for ( let i = arr.length - 1; i >= 0; i -- ) {

    for ( let j = 0; j < i - 1; j++ ) {
      if( arr[j] > arr[j + 1]) {
         let temp = arr[j]
         arr[j] = arr[j + 1]
         arr[j + 1] = temp
         
      }
    }
  }
  return arr
}

const myArr = [ 56,7,34,89,123,78 ]

console.log(bubbleSort(myArr))