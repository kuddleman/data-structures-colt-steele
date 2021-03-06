class List {
  constructor() {
    console.log('created!')
    this.data = new Array(10)
    this.size = 0
  }
  

// a simple method that returns the value at the specified index
  // if the index is winthin the valid range of the elements in the list.  
  // It returns null if someone tries to access an index out of range
  // of the list

get( index ) {
  if ( index < this.size ) {
    return this.data[ index ]
  }
  return null
}  

// overwrites the value as the specified index,
  // and the index must be within a valid range of the current size
  // of the list
set ( index, value ) {
  if ( index >= 0 && index < this.size ) {
    this.data[ index ] = value
  }
  return 'Not valid data'
}  


  // add the value to the first-most free position in the
     // data array
  push(value) {
    if ( this.size === this.data.length ) {
      this.grow()
    }

    this.data[ this.size ] = value
    this.size++
  }   

  // given an index, remove an item:
  remove( index ) {

    if ( this.size === 0 ) {
      return null
    }

    let removed = this.data[ index ]
    
    // scoot all values over
    for ( let i = index; i < this.size - 1; i++ ) {
      this.data[i] = this.data[ i + 1 ]
    }

    // manually overwrite the stale data:
    this.data[ this.size - 1 ] = null

    // decrement the size by 1
    this.size --
    
    return removed
  }

  grow() {
    let aa = new Array( this.data.length * 2 )
    for ( let i = 0; i < this.data.length; i++ ) {
      aa[i] = this.data[i]
    }

    this.data = aa
  }

  add ( index, value ) {
    if ( this.size === this.length ) {
      this.grow()
    }

    for ( let i = this.size; i > index; i-- ) {
      this.data[ i ] = this.data[ i - 1 ]
    }
    this.data[ index ] = value
    this.size ++
  }
  // better to use this.size when iterating as opposed to
    // this.data.length.  The latter will go over the empty spaces (if any)
    // as well.  The former will just interate over the size of the array where
    // there is actual data.  

  contains ( value ) {
    for ( let i = 0; i < this.size; i++ ) {
      if ( this.data[ i ] === value ) {
        return true
      }
    }
    return false
  }

  concat ( otherArr ) {
    let result = new List()
    for (let i = 0; i < this.size; i++) {
      result.push( this.get(i) )
    }
    for (let i = 0; i < other.size; i++) {
      result.push( other.get(i) )
    }
    
    return result

  }

  // use toString method to choose how we want
     // to represent the class

  toString() {
    if ( this.size === 0 ) {
      return '[]'
    } else {
      let result = ''
      for ( let i = 0; i < this.size; i++ ) {
        result +=  this.data[i] + ' '
      }
      return '[' + result + ']'
    }
  }   
}

const myList = new List()
console.log(myList.data)
myList.push(42)
myList.push(25)
myList.push(27)
myList.push(67)
myList.push(29)
console.log('str:', myList.toString())
console.log('data:', myList.data)

myList.remove(2)

console.log('str:', myList.toString())
console.log('data:', myList.data)
