// given a  non-negative integer in base 10


// base 10    10       base 2 1010    true


// we have to covert the base 10 num to base 2.    


//convert it to a string

// interate through the string

// make sure i !== i + 1
// if so, return true, else return false


// can I use the standard library of the language I'm using?

const nextToEachOther = num => {

  const baseTwoNum = num.toString( 2 )

  for ( let i = 0; i < baseTwoNum.length - 1; i++ ) {
   

    if ( baseTwoNum.charAt(i) === baseTwoNum.charAt( i + 1 )) {
      return false
    }
  }

  return true
}
