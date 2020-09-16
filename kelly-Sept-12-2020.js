/*
Given an array of unique integers.   Array is NOT sorted

Get average of all numbers EXCEPT the min and max of the arr

[1 , 2, 3]
Throw out 1 and 3
*/


//find the min  and get rid of it

// Find the max and get rid of it. 

//  Add up all the remaining numbers and get the average.    




// Use a sort algo  to sort the array

// use shift and pop to get rid of min and max

//  loop through remaining element and get average.

// time complexity of   nlogn   

//  this uses. sort which in js is  quick sort or merge sort.  O notation is nlogn

const getAverage = arr => {

  const sortedArr = arr.sort()

   sortedArr.pop()

   sortedArr.shift()

   let total = 0

   for ( let i = 0; i < sortedArr.length; i++ ) {
     total += arr[i]
   }

   let finalAnswer = total / arr.length


  return finalAnswer
}

// improve time complexity down to O(n)
const getAverage2 = arr => {

  let max = arr[0]
  let min = arr[0]
  let total = 0
  

   for ( let i = 0; i < arr.length; i++ ) {
     // find max
     if ( arr[i] > max ) {
       max = arr[i]
     }
     //find min
     if ( arr[i] < min ) {
      min = arr[i]
    }

    total += arr[i]

   }

   let adjTotal = total - max - min

   let finalAnswer = adjTotal / (arr.length - 2 )


  return finalAnswer
}

const myArr = [1 , 2, 3, 4, 7]

console.log(getAverage2(myArr))



