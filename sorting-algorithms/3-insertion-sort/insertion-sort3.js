const insertionSort = arr => {
  
  for ( let i = 1; i < arr.length; i++ ) {
    
    let currentVal = arr[ i ]
    //now look backwards to compare currentVal to all the values that came before it.  
    // start with the number just before currentVal  j = i - 1

    for( var j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {
      //shift numbers to the right
      arr[j + 1] = arr[j]
    }

    //now insert currentVal.  The place to insert is j + 1
    // because j points to the number LOWER than our currentValue,
    // so we need to put currentVal in j + 1
    arr[ j + 1 ] = currentVal

  }
  return arr
}

const myArr = [ 2, 1, 9, 76, 4, 56, 89 ]

console.log(insertionSort(myArr))