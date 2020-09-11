

const selectionSort = arr => {

  
 
  for ( let i = 0; i < arr.length; i++ ) {
    let idxMinVal = i
    for ( let j = i + 1; i < arr.length; j++ ) {
      if ( arr[j] < arr[idxMinVal] ) {
        idxMinVal = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[idxMinVal]
    arr[ idxMinVal ] = temp
  }
    

  return arr
}


const myArr = [ 56,7,34,89,123,78 ]

console.log(selectionSort(myArr))

