'use strict'

function bubbleSort(items) {
  var length = items.length;
  for (var i = 0; i < length; i++) { //Number of passes
    for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
      //Compare the adjacent positions
      if(items[j] > items[j+1]) {
        //Swap the numbers
        var tmp = items[j];  //Temporary variable to hold the current number
        items[j] = items[j+1]; //Replace current number with adjacent number
        items[j+1] = tmp; //Replace adjacent number with current number
      }
    }
  }
  return items;
}


// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    //console.log(items[0]);
    console.log(bubbleSort(items))

  })
}

main()
