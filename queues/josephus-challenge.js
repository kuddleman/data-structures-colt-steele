// enqueue everything

// dequeue one by one
   //while queue.size > 1

// if count % n !== 0, re enqueue it.


const josephus = ( arrChoices, n ) => {
  //make an empty queue
  let qq = new Queue()

  // enqueue each elem of arrChoices
  for ( let choice of arrChoices ) {
    qq.enqueue(choice)
  }

  // account for starting the 1 count at the second position
  qq.enqueue(qq.dequeue())

  let count = 0
  while (qq.size > 1) {
    //dequeue the choice
    let choice = qq.dequeue()

    if ( count % n !== 0 ) {
      qq.enqueue( choice )
    }
    count ++
  }

}

let choices = ["A", "B", "C", "D", "E", "F"]