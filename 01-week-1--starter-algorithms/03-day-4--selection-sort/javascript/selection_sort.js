function selectionSort(arr) {
  const sortedArray = [];
  const originalLength = arr.length;
  for (let i = 0; i < originalLength; i ++){
    let lowestSoFar = arr[0];
    let lowestIndex = 0;
    for(let i = 0; i < arr.length; i ++){
      if(arr[i] < lowestSoFar){
        lowestSoFar = arr[i];
        lowestIndex = i;
      }
    }
    sortedArray.push(lowestSoFar);
    arr.splice(lowestIndex, 1);
  }
  return sortedArray;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 4, 5]");
  console.log("=>", selectionSort([4, 3, 1, 5, 2]));

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5, 500, 1000, 893421 ]");
  console.log("=>", selectionSort([893421, 5, 500, 1000, 2, -1, 3]));

  console.log("");

  console.log("Expecting: [-1, 2.4, 3, 52, 500.321, 1000, 893421 ]");
  console.log("=>", selectionSort([893421, 5, 500.321, 1000, 2.4, -1, 3]));

  console.log("");


  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log('benchmark', avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// function(array){
  // declare empty array for sorted numbers
  // declare lowest so far as array[0]
  // for loop to go through unsorted array
    // if number is lower than lowest so far,
      // set set number to current lowest
      // set lowest key to i
  // once loop is complete add lowest to sorted array and remove from unsorted array
  // repeat until array is empty;

// And a written explanation of your solution

// We will go through the array and find the lowest of that array and it's index. We will push the lowest into a new array and splice out the number from the old array using it's index. at the end return the new array