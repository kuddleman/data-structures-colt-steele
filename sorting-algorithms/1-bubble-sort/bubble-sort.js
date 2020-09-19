const bubbleSort = arr => {
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j <  arr.length - i - 1; j++ ){ // this is how you keep restricting the size of the area checked
      if ( arr[ j ]  >  arr[ j + 1 ] ) {
        const lesser = arr[ j + 1 ]
        arr[ j + 1 ] = arr[ j ]
        arr[ j ] = lesser
      }
    }
  } 
  return arr
}

const myArr = [ 5,3,8,9,10, -13, 58 ]

console.log(bubbleSort( myArr ))