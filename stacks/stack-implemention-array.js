// implement a stack WITH AN ARRAY

//  a stack is more of a concept LIFO

// JS Does NOT come with a built-in stack as a data type.   


const stack = []

stack.push("google")

stack.push("instagram")

stack.push("youtube")


// now we can use pop to take off from the end
// efficient, just add and subtract from the end.
// We do not have to reindex  O(1)

// __________________________________________________

// another way to do it to use shift()  and unshift()
// but this is not time efficient.  You have to kept shifting items O(n)

const anotherStack = []

// add items to stack
anotherStack.unshift("create new file")
anotherStack.unshift("resized file")
anotherStack.unshift("cloned out wrinkle")

//removed them:
anotherStack.shift()  // "cloned out wrinkle"
anotherStack.shift()  // "resized file"
anotherStack.shift()  // "create method"

