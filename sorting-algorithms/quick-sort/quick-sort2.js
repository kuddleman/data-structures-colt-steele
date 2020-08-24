
const quickSort = array => {

  if ( array.length === 1 ) {
    return array
  }

  const pivot = array[ array.length - 1 ]
  const leftArr = []
  const rightArr = []

  //for loop  where we do NOT loop over the pivot itself
  for ( let i = 0; i < array.length - 1; i++ ) {
    if ( array[i] < pivot ) {
      leftArr.push( array[i] )
    } else {
      rightArr.push( array[i] )
    }
  }

  if ( leftArr.length > 0 && rightArr.length > 0 ) {
    return [ ...quickSort( leftArr ), pivot, ...quickSort( rightArr ) ]
  } else if ( leftArr.length > 0 ) {
    return [ ...quickSort( leftArr ), pivot ]
  } else {
    return [ pivot, ...quickSort( rightArr ) ]
  }

}

console.log( quickSort([ 9, 39, 12, 40, 39, 26, 15, 5, 96, 67 ] ) )

