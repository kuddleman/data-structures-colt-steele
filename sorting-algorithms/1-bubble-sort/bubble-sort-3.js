// bubble sort
let noSwaps;
const bubbleSort = arr => {
   noSwaps = true;
  for ( let i = arr.length; i > 0; i-- ) {
    for ( let j = 0; j < i - 1; j++ ) {
      if ( arr[j] > arr[ j + 1 ] ){
        let temp = arr[ j ] 
        arr[ j ] = arr[ j + 1 ]
        arr[ j + 1 ] = temp
        noSwaps = false
      }
    }
    if(noSwaps) break
  }
  return arr
}

const myArr = [ 37, 45, 29, 8 ]

console.log(bubbleSort(myArr))