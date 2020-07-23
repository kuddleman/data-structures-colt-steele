class List {
  constructor() {
    console.log('created!')
    this.data = new Array(10)
    this.size = 0
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

  grow() {
    let aa = new Array( this.data.length * 2 )
    for ( let i = 0; i < this.data.length; i++ ) {
      aa[i] = this.data[i]
    }

    this.data = aa
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
console.log('str:', myList.toString())
console.log('data:', myList.data)