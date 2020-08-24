// Implementation of QuickSort

// The quick sort continues utnil the base case of an empty or single-item
// array is reached, which we return.  The unwinding of the recursive call
// returns us the sorted array

const qSort = arr => {
  if ( arr.length === 0 ) {
    return []
  }

  const left = []
  const right = []
  const pivot = arr[0]

  for ( let i=1; i < arr.length; i++ ) {
    if ( arr[i] < pivot ) {
      left.push( arr[i] )
    } else {
      right.push( arr[i] )
    }
  }

  return qSort( left ).concat( pivot, qSort( right ))

}

const myArr = []

for ( let i = 0; i < 10; i++) {
  myArr[ i ] = Math.floor( Math.random() * 100 + 1 )
}

console.log( myArr )

console.log()

console.log( qSort( myArr ))