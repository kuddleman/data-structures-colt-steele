
/*A good hash table:

1. Is Fast (constant time)

2.  Doesn't cluster outputs at specific indices, but distributes uniformly

3.  Deterministic (same input yields same output)
*/

//this only works on strings:
// It's also NOT constant time
//  It does cluster outputs
// const hash = ( key, arrayLen ) => {
//   let total = 0
//   for ( let char of key ) {
//     let value = char.charCodeAt(0) - 96
//     total = ( total + value ) % arrayLen
//   }
//   return total
// }



const hashStringToInt = ( str ) => {
  return 5
}

class HashTable {

  table = new Array(100)

  setItem = ( key, value ) => {
    const idx = hashStringToInt(key)
    this.table[idx] = value
  }

  getItem = key => {
    const idx = hashStringToInt(key)
    return this.table[idx]
  }
}

const myTable = new HashTable()
myTable.setItem ( 'firstName', 'Bob' )
myTable.getItem( 'firstName' )